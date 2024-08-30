import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [add, setAdd] = useState(0);



 
  return (
    <div className='app'>
      <div className='container'>
        <div className='headin_text'>
          <h1 className='headin_one'>Simple Calculator</h1>
          <p className='headin_two'>Calculate your Simple Interest</p>
        </div>
      </div>
    </div>
  )
}

export default App