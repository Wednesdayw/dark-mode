import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [dark, setDark] = useLocalStorage("dark");
  useEffect(() => {
    dark
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [dark]);

  return [dark, setDark];
}
