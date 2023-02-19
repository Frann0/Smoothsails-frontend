import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouteInterface } from './models/sharedInterfaces'
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
function App() {
  const routes = [
    {
      path: '/',
      element: <div>Home</div>,
    },

    {
      path: '*',
      element: <div>404</div>,
    },
  ] as RouteInterface[]

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={
              <>
                <div className='Route_Container'>
                  {route.element}
                </div>
              </>
            } />
          ))}
        </Routes>
      </Router>

    </div>
  )
}

export default App
