import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SorteoPres from './SorteoPres'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SorteoPres></SorteoPres>
    </>
  )
}

export default App