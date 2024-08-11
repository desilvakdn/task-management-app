"use client";
import { useState } from "react";

interface configType {
  [key: string]: any;
}

const useDataStore = <T extends configType>(props: T) => {
  const [Config, setConfig] = useState<T>(props);

  const getProperty = <K extends keyof T>(key: K) => {
    return Config[key];
  };

  const updateConfig = <K extends keyof T>(key: K, value: T[K]): void =>
    setConfig((config) => ({ ...config, [key]: value }));

  return { Config, updateConfig, getProperty };
};

export default useDataStore;
