import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import NotFound from './components/Notfound';
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
  return <RouterProvider router={router} />;
}

export default App;