import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
])