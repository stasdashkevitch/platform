import { InputHTMLAttributes, memo, useEffect, useRef } from "react"
import { classNames } from "shared/lib/classNames";
import styles from "./Input.module.scss"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo(({ className, value, onChange, type = "text" , autofocus, ...otherProps}: InputProps) => {
  const onChangeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }
  const ref = useRef<HTMLInputElement>()

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus()
    }
  }, [autofocus])
  return (
      <input
        ref={ref}
        className={classNames(styles.input, {}, [className])}
        type={type}
        onChange={onChangeHadler}
        value={value}
        {...otherProps}
      />
  )
})

