import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { Hello } from '../odcinek92/ReactRooter/Hello';
import { Home } from '../odcinek92/ReactRooter/Home';
import { AboutUs } from '../odcinek92/ReactRooter/AboutUs';
import { AboutCompany } from '../odcinek92/ReactRooter/AboutCompany';
import { AboutOutlet } from '../odcinek92/ReactRooter/AboutOutlet';
import { MainLayout } from '../odcinek92/ReactRooter/MainLayoutWithAppLink';
import { Product } from '../odcinek92/ReactRooter/Product';
import { ProductsDetailsWithLink } from '../odcinek92/ReactRooter/ProductDetailsWithLink';
import { About } from '../odcinek92/ReactRooter/About';
import { DataComponent } from './PathWithLoader';
import { MainLayoutWithNew } from './MayLayoutWithNew';
import { ErrorElement } from './ErrorElement';
import { MyIp } from './MyIp';
import { GlobalErrorBoundary } from './GlobalErrorBoundary';

const router = createBrowserRouter([
    {
        element: <MainLayoutWithNew />,  // Only use one layout for the common paths
        errorElement: <GlobalErrorBoundary />,
        children:[
            {
                path: '/hello',
                element: <Hello />
            }, 
            {
                path: '/',
                element: <Home />
            },
            { 
                path: '/about',
                element: <AboutOutlet />,
                children: [
                    {
                        index:true,
                        element: <AboutUs/>
                    },
                    {
                        path: 'company',
                        element: <AboutCompany />
                    },
                    {
                        path: '*',
                        element: <Navigate to="." />
                    }
                ]
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/product/details',
                element: <ProductsDetailsWithLink />
            },

            // ***** od tego zaczyan ***** 
            // {
            //     path: '/path-with-loader/:id?',
            //     element: <DataComponent />,
            //     loader: () => "lorem ipsum"
            // },
            // ****** ciag dalszy
            // {
            //     path: '/path-with-loader/:id?',
            //     element: <DataComponent />,
            //     loader: async () => {
            //         return new Promise<string>((resolve) => resolve('Lorem ipsum'))
            //     },
            // },
            {
                path: '/path-with-loader/:id?',
                element: <DataComponent />,
                errorElement: <ErrorElement />,
                loader: async ({request, params}) => {
                    return new Promise<string>((resolve,reject) => {
                        setTimeout(() => {
                            reject('Lorem ipsum');
                        }, 1000);
                    });
                },
            },
            {
                path: '/ip-adress',
                element: <MyIp />,
                errorElement: <ErrorElement />,
                loader: async () => {
                    return fetch('https://api.ipify.org?format=json')
                    }
                },
            {
                path: '*',
                element: <Navigate to='/hello' />
            }
        ]
    }
]);

export const Odcinek94App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
 