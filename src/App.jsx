import { useState } from 'react'
import './App.css'
import LoginPage from './assets/Components/LoginPage';
import './assets/Components/LoginPage.css';  // Import the CSS file

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <LoginPage/>
      </div>
    </>
  )
}

export default App
