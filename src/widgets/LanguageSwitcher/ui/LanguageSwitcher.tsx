import { classNames } from "shared/lib/classNames"
import styles from "./LanguageSwitcher.module.scss"
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
  const {t, i18n} = useTranslation()
  const handleOnToggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div className={classNames('bu')}>
      <button onClick={handleOnToggleLanguage}>{t('Язык')}</button> 
    </div>
  )
}

