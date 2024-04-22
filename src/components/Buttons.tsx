import { useState } from "react"
import './Button.scss'

export const Button = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        click
      </button>
      <div className="div">{value}</div>
    </>
  )
}
