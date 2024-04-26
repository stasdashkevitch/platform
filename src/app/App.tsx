import { Link } from "react-router-dom"
import { useTheme } from "app/providers/ThemeProviders"
import './styles/index.scss'
import { AppRouter } from "app/providers/router"

export const App = () => {
  const {theme, handleToggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <button onClick={handleToggleTheme}>Theme</button>
      <AppRouter/>
    </div>
  )
}

