import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import App from './App';
import Persons from './pages/Characters';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/About';
import ACharacter from './pages/ACharacter';
import FavoritesPage from './pages/Favorites';
import Search from './pages/Search';

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
            {
                path:"character/:id/",
                element:<ACharacter />
            },
            {
                path:'favorites/',
                element:<FavoritesPage />
            },
            {
                path:'search/:searchValue/',
                element:<Search />
            }
        
        ],
        errorElement: <NotFoundPage />
    }
])
export default router;