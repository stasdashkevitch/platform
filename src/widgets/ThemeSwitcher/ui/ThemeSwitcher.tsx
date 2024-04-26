import { classNames } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProviders"
import style from "./ThemeSwitcher.module.scss"

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { handleToggleTheme } = useTheme()

  return (
    <button
      className={classNames(style.button, {}, [className])}
      onClick={handleToggleTheme}
    >
      ThemeSwitcher
    </button>
  )
}

