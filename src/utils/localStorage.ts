export const getFromLocalStorage = (key: string): any | null => {
  if (typeof window === "undefined") return null;
  try {
    const fetchedData = localStorage.getItem(key);
    if (!fetchedData) return null;
    return JSON.parse(fetchedData);
  } catch (error) {
    console.error(`Error parsing data for key "${key}":`, error);
    return null;
  }
};

export const setToLocalStorage = (key: string, data: any): boolean => {
  if (data === undefined && typeof window === "undefined") return false;
  try {
    const valueToStore =
      typeof data === "object" ? JSON.stringify(data) : String(data);
    localStorage.setItem(key, valueToStore);
    return true;
  } catch (error) {
    console.error(`Error setting data for key "${key}":`, error);
    return false;
  }
};

export const clearLocalStorage = (key?: string): boolean => {
  if (typeof window === "undefined") return false;
  try {
    if (!key) {
      localStorage.clear();
    } else {
      localStorage.removeItem(key);
    }
    return true;
  } catch (error) {
    console.error(
      `Error clearing data${key ? ` for key "${key}"` : ""}:`,
      error,
    );
    return false;
  }
};
