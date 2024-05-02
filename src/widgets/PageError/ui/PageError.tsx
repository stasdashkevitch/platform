import { classNames } from "shared/lib/classNames";
import style from "./PageError.module.scss"
import { useTranslation } from "react-i18next";
import error from "../../../shared/assets/error/error.png";
interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  function handleHotReload() {
    location.reload()
  }
  return (
    <div className={classNames(style.pageError)}>
      <p>{t('Упс... Что-то пошло не так')}</p>
      <img src={error} />
      <button onClick={handleHotReload}>Перезагрузить страницу</button>
    </div>
  )
}

