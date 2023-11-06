import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import App from './App';
import Persons from './pages/Characters';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path:'/about',
                element:<AboutPage />

            },
            {
                path:"/characters",
                element:<Persons/>
            },
        
        ],
        errorElement: <NotFoundPage />
    }
])
export default router;