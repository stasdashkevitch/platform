import { Link, Route, Routes } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { Suspense } from "react"
import { useTheme } from "./theme/useTheme"
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
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

