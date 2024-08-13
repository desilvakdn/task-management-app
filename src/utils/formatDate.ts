import { format } from "date-fns";

function formatDate(date: Date | string, fullFormat: boolean = false) {
  const currentYear = new Date().getFullYear();
  let dateYear;
  if (typeof date === "string") {
    dateYear = new Date(date).getFullYear();
  } else {
    dateYear = date.getFullYear();
  }

  const formattedDate = format(
    date,
    fullFormat
      ? "d MMMM yyyy"
      : dateYear > currentYear
        ? "MMM d, yyyy"
        : "MMM d",
  );

  return formattedDate;
}

export default formatDate;
