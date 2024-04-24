import { useState } from "react"
import styles from './Button.module.scss'

export const Button = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <button className={styles.div} onClick={() => setValue(value + 1)}>
        click
      </button>
      <div className={styles.div}>{value}</div>
    </>
  )
}
