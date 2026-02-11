import { useState } from 'react'
import './App.css'
import informations from './info.js'

function App() {
  const [count, setCount] = useState(0)
  const [content, setContent] = useState("")

  return (
    <>
      <div className='top-bar'>
        <h2>
          Gonçalo Dias Rodrigues
        </h2> 
      </div>

      <div className='side-bar'>
        <button onClick={() => setContent(informations[0])}>
          👉 About Me 👈
        </button>

        {
          content && (
            <div className='content-box'>
              <h2>{content.name}</h2>
              <p>{content.information}</p>
              <button onClick={() => setContent(null)}>Fechar</button>
            </div>
          )
        }





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
