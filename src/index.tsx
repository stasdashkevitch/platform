import { createRoot } from 'react-dom/client'
import { Button } from "./components/Buttons"

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)
root.render(<Button/>);

