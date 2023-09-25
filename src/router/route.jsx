import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CategoryCardDetails from '../pages/CategoryCardDetails/CategoryCardDetails';
import Donation from '../pages/Donation/Donation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Statistics from '../pages/Statistics/Statistics';

const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`/donations.json`)
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/categories/:id',
                element: <CategoryCardDetails></CategoryCardDetails>,
                loader: ()=> fetch(`/donations.json`)
            },
            {
                path: '/donation/:id',
                element: <Donation></Donation>,
                loader: ()=> fetch(`/donations.json`)
            },
        ]
    }
]) 

export default MyCreatedRouter;