import { useEffect, useState } from "react";

function useDarkMode() {
  const [defaultTheme, setDefaultTheme] = useState(localStorage.theme);
  const value = defaultTheme === "dark";
  const theme = value ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    if (defaultTheme) {
      root.classList.remove(theme);
      root.classList.add(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, [defaultTheme, theme]);
  return [value, theme, setDefaultTheme];
}

export default useDarkMode;
