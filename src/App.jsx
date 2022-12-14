import { useState } from 'react'
import ProductPage from './useCallback'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <span>leaning hooks</span>
        <ProductPage productId={1} referrer={"xxx"} theme={"dark"}/>
    </div>
  )
}

export default App
