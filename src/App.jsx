import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import NotFound from './components/Notfound';
import SolarWingsLoader from './components/SolarWingsLoader';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <><Hero /><Main /></>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "service",
        element: <Service />
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add class to body for loader-specific styling
    document.body.classList.add('solar-loader-active');
    
    // Simulate loading (replace with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('solar-loader-active');
    }, 3000); // Show loader for 4 seconds

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('solar-loader-active');
    };
  }, []);

  return (
    <>
      {isLoading && <SolarWingsLoader />}
      
      <div className={`app-content ${isLoading ? 'prevent-scroll' : ''}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;