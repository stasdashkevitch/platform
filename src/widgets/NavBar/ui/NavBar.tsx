import { classNames } from "shared/lib/classNames"
import style from "./NavBar.module.scss"
import { AppLink } from "shared/ui/AppLink";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
  return (
    <div className={classNames(style.navbar)}>
      <AppLink to={'/'}>Главная</AppLink>
      <AppLink to={'/about'}>О сайте</AppLink>
    </div>
  )
}

