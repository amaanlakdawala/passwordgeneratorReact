import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'
import Data from './components/Data'
import PasswordGenerator from './components/PasswordGenerator'

function App() {
  // const [count, setCount] = useState(0)
  const Obj =[ {
    name: 'John',
    location:'mumbai'    
  },
  {
    name: 'Tom',
    location:'Delhi'    
  }
]

  return (
    <>
      {/* <Chai />
      
      <Data newObj={Obj}/> */}
      <h1>Password Generator</h1>
      <PasswordGenerator/>
    </>
  )
}

export default App
