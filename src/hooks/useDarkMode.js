import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [dark, setDark] = useLocalStorage("dark"); //key
  useEffect(() => { //hook
    dark
      ? document.body.classList.add("dark-mode") //Add the class to the body element if it's true
      : document.body.classList.remove("dark-mode"); // Remove the body element if it's false
  }, [dark]);

  return [dark, setDark];
}
