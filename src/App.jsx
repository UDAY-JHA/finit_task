import { useState,useEffect } from 'react'
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
import Loader from './components/LOADER.jsx'


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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // simulate load time
    return () => clearTimeout(timer);
  }, []);
  return (
    <>

      
      {loading ? <Loader /> : <RouterProvider router={router} />}
    </>
       
  )
}

export default App
