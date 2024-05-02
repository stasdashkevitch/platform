import { classNames } from "shared/lib/classNames";
import img404 from "../../../shared/assets/404/404.png";
import dark404 from "../../../shared/assets/404/404_sec.png";
import style from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "app/providers/ThemeProviders";
import { Theme } from "app/providers/ThemeProviders/lib/ThemeContext";

interface NotFoundPageProps {
  ClassName?: string;
}

export const NotFoundPage = ({ ClassName }: NotFoundPageProps) => {
  const {t} = useTranslation('not_founded_page')
  const {theme} = useTheme()
  return (
    <div className={classNames(style.wrapper)}>
      <img className={style.img} src={theme === Theme.LIGHT ? img404 : dark404} alt="not founded" />
      <p>{t("Страница не найдена")}, <Link to='/'>{t("перейти на главную")}?</Link></p>
    </div>
  )
}

