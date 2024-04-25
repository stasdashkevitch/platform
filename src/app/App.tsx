import { Link, Route, Routes } from "react-router-dom"
import {MainPage} from "pages/MainPage"
import {AboutPage} from "pages/AboutPage"
import { Suspense } from "react"
import { useTheme } from "app/providers/ThemeProviders"
import './styles/index.scss'

export const App = () => {
  const {theme, handleToggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <button onClick={handleToggleTheme}>Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

