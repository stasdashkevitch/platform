import { useTheme } from "app/providers/ThemeProviders"
import './styles/index.scss'
import { AppRouter } from "app/providers/router"
import { NavBar } from "widgets/NavBar"
import { SideBar } from "widgets/SideBar"

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  )
}

