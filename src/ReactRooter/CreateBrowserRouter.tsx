import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Hello } from './Hello';
import { Home } from './Home';
import { AboutUs } from './AboutUs';
import { AboutCompany } from './AboutCompany';
import { About } from './About';
import { MainLayout } from './MainLayout';
import { Product } from './Product';
import { ProductsDetails } from './ProductsDetails';

// const router = createBrowserRouter([
    
//     {
//         path: '/hello',
//         element: <Hello />
//     }, 
//     {
//         path: '/',
//         element: <Home />
//     },
//     {
//         path: '/about',
//         element: <About />,
//         children: [
//             {
//                 path: '/about/us',
//                 element: <AboutUs/>
//             },
//             {
//                 path: '/about/company',
//                 element: <AboutCompany />
//             },
//         ]
//     },
//     {
//         path: '/about',
//         element: <About />,
//         children: [
//             {
//                 index:true,
//                 element: <AboutUs/>
//             },
//             {
//                 path: '/about/company',
//                 element: <AboutCompany />
//             },
//         ]
//     },
//     {
//         path: '/about/us',
//         element: <AboutUs/>
//     },
//     {
//         path: '/about/company',
//         element: <AboutCompany />
//     },
// ])


const router = createBrowserRouter([
    { 
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/hello',
                element: <Hello />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        index: true,
                        element: <AboutUs />
                    },
                    {
                        path: 'company',
                        element: <AboutCompany />
                    }
                ]
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/product/details',
                element: <ProductsDetails />
            },
        ]
    }
]);


export const RouterDom = () => {





return (
    <>

<RouterProvider router={router} />

        </>
)

}