import { useState } from "react";

//build the useLocalStorage function
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  //setter
  const setValue = (newValue) => { //wrapper around setter
    setStoredValue(newValue); //save the state
    window.localStorage.setItem(key, JSON.stringify(newValue)); // JSON parses into a string
  };
  return [storedValue, setValue];
}