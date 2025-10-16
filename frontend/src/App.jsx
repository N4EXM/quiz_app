import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuth } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import TopicsPage from './pages/TopicsPage'
import TopicListPage from './pages/TopicListPage'
import LoadingPage from './pages/LoadingPage'



function App() {
  const [count, setCount] = useState(0)
  const { isAuthenticated, isLoading } = useAuth()

  return (
    <>
      <div
        className='text-slate-800 dark:text-slate-200  font-poppins w-full min-h-screen h-full relative'
      >
        <BrowserRouter>
          <Routes>
            <Route
              path='/Login'
              element={!isLoading ? <Login/> : <LoadingPage/>}
            />
            <Route
              path='/Register'
              element={!isLoading ? <Register/> : <LoadingPage/>}
            />
            <Route
              path='/'
              element={!isLoading 
                ? <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                : <LoadingPage/>
              }
            />
            <Route
              path='/Topics/:id'
              element={!isLoading
                ? <ProtectedRoute>
                    <TopicsPage/>
                  </ProtectedRoute>
                : <LoadingPage/>
              }
            />
            <Route
              path='/Topics'
              element={!isLoading
                ? <ProtectedRoute>
                    <TopicListPage/>
                  </ProtectedRoute>
                : <LoadingPage/>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
