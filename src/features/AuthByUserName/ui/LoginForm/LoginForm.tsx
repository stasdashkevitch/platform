import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames";
import styles from "./LoginForm.module.scss"
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation("login_form")
  const [value, setValue] = useState('')
  const onChange = (value: string) => {
    setValue(value)
  }
  return (
    <div className={classNames(styles.loginForm)}>
      <Input onChange={onChange} value={value} autofocus={true} className={styles.input} type="text" placeholder="name" />
      <Input className={styles.input} type="password" placeholder="password" />
      <button className={styles.loginBtn}>{t('Войти')}</button>
    </div>
  )
}

