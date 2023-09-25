import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Donation from '../pages/Donation/Donation';
import Statistics from '../pages/Statistics/Statistics';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import DonationDetails from '../pages/DonationDetails/DonationDetails';

const myRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/donation-details/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/myDonation.json'),
      },
    ],
  },
]);

export default myRoute;
