import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pastes",
      element: <Paste />,
    },
    {
      path: "/pastes/:id",
      element: <ViewPaste />,
    },
  ]);

  return (
    <div>
    <Navbar/>
    <RouterProvider router={router} />
    </div>
  )
  
}

export default App
