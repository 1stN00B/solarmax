import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import NotFound from './components/Notfound';
import SolarWingsLoader from './components/SolarWingsLoader';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom"; // Add useLocation

// Updated Layout to include scroll-to-top
const Layout = () => {
  const location = useLocation(); // Get current route location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]); // Trigger when path changes

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

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
        element: <Service/>
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
    document.body.classList.add('solar-loader-active');
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('solar-loader-active');
    }, 3000);

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