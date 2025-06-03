import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import NotFound from './components/Notfound';
import SolarWingsLoader from './components/SolarWingsLoader';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet, 
  useLocation,
  useNavigationType
} from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const prevPathname = useRef(location.pathname);

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) { // Fixed: use window.history
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Handle scroll reset for new page navigations
    if (navigationType === 'PUSH' || prevPathname.current !== location.pathname) {
      if (!location.hash) {
        window.scrollTo(0, 0);
      }
      prevPathname.current = location.pathname;
    }
  }, [location, navigationType]);

  // Handle back/forward navigation
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        // Use current window location to avoid stale closure issues
        if (!window.location.hash) {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

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
  const savedScrollPosition = useRef(0);

  useEffect(() => {
    // Save scroll position before showing loader
    savedScrollPosition.current = window.scrollY;
    document.body.classList.add('solar-loader-active');

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('solar-loader-active');
      
      // Restore scroll position after loader
      requestAnimationFrame(() => {
        window.scrollTo(0, savedScrollPosition.current);
      });
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