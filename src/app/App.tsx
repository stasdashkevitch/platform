import { useTheme } from "app/providers/ThemeProviders"
import './styles/index.scss'
import { AppRouter } from "app/providers/router"
import { NavBar } from "widgets/NavBar"

export const App = () => {
  const {theme, handleToggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <NavBar />
      <button onClick={handleToggleTheme}>Theme</button>
      <AppRouter/>
    </div>
  )
}

