import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

interface UseThemeResult {
  handleToggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)

  const handleToggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {theme, handleToggleTheme}
}
