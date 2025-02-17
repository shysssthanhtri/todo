import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

export function useLocalStorage<V>(
  key: string,
  _initValue: V,
): { value: V; setValue: Dispatch<SetStateAction<V>> } {
  const persistedValue = useMemo(() => {
    if (typeof localStorage === "undefined") return _initValue;
    const _persistedValue = localStorage.getItem(key);
    return _persistedValue !== null
      ? (JSON.parse(_persistedValue) as V)
      : _initValue;
  }, [_initValue, key]);

  const [value, setValue] = useState(persistedValue);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return { value, setValue };
}
