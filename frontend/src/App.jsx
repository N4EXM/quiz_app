import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div
        className='text-slate-900 font-poppins w-full min-h-screen h-full'
      >
        <BrowserRouter>
          <Routes>
            <Route
              path='/Login'
              element={<Login/>}
            />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
