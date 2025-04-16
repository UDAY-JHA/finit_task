import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HOME from './pages/HOME.jsx'
import FOOTER from './components/FOOTER.jsx'
import ABOUTUS from './pages/ABOUTUS.jsx'
import TEAMEVENTS from './pages/TEAMEVENTS.jsx'
import CONTACTUS from './pages/CONTACTUS.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
                <Navbar/>
                <HOME/>
                <FOOTER/>
             </>,
  },
  {
    path: "/aboutus",
    element: <>
                <Navbar/>
                <ABOUTUS/>
                <FOOTER/>
             </>,
  },
  {
    path: "/teamevents",
    element: <>
                <Navbar/>
                <TEAMEVENTS/>
                <FOOTER/>
             </>,
  },
  {
    path: "/contactus",
    element: <>
                <Navbar/>
                <CONTACTUS/>
                <FOOTER/>
             </>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
       
  )
}

export default App
