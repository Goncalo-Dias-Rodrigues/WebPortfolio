import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='top-bar'>
        <h2>
          Gonçalo Dias Rodrigues
        </h2> 
      </div>

      <div className='side-bar'>
        <h2>
          Gonçalo Dias Rodrigues
        </h2> 
      </div>



      
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      
      
    </>
  )
}

export default App
