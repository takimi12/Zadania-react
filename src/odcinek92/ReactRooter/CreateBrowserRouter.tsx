import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { Hello } from './Hello';
import { Home } from './Home';
import { AboutUs } from './AboutUs';
import { AboutCompany } from './AboutCompany';
import { About } from './About';
import { MainLayout } from './MainLayout';
import { Product } from './Product';
import { ProductsDetails } from './ProductsDetails';
import { AboutOutlet } from './AboutOutlet';
import { ProductsDetailsWithLink } from './ProductDetailsWithLink';

const router = createBrowserRouter([
    
    {
        path: '/hello',
        element: <Hello />
    }, 
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about/us',
        element: <AboutUs/>
    },
    {
        path: '/about/company',
        element: <AboutCompany />
    },
    // 1 sposób
    {
        path: '/about',
        children: [
            {
                path: 'us',
                element: <AboutUs/>
            },
            {
                path: 'company',
                element: <AboutCompany />
            },
        ]
    },

    // 2 sposob

    {
        path: '/about',
        element: <About />,
        children: [
            {
                path:'us',
                element: <AboutUs/>
            },
            {
                path: '/about/company',
                element: <AboutCompany />
            },
        ]
    },

      // 3 sposob

      {
        path: '/about',
        element: <AboutOutlet />,
        children: [
            {
                path:'us',
                element: <AboutUs/>
            },
            {
                path: '/about/company',
                element: <AboutCompany />
            },
        ]
    },
    // 4 sposób 
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
            ]
        },
        // dodanie mainlayout

        {
            element: <MainLayout />,
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
                {
                    path: '*',
                    element: <Navigate to='/hello' />
                }

            ]
        }
 
])





export const RouterDom = () => {





return (
    <>

<RouterProvider router={router} />

        </>
)

}