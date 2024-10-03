import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { MainLayout } from "./MainLayout"
import { Account } from "./Account"
import { Suspense, lazy } from "react";
import { aboutLoader } from "./AboutLoader";
import { Create } from "./Create";


// 1 - klasyczny

// export const Odcinek95 = () => {
//     return (
//         <BrowserRouter>
//             <Routes>    
//                 <Route element={<MainLayout />} >
//                 <Route path='account' element={<Account/>} loader={async() => {
//                     return 'lorem ipsum'
//                 }} />
//                 <Route path='about' element={<About/>} />
//                 <Route path='*' element={<Navigate to='account' />} />
//                  </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }



// 2 - z wykorzystaniem createBrowserRouter ===== zalecane

// const router = createBrowserRouter([
//     {
//         element: <MainLayout />,
//         children:[
//             {
//                 path:'account',
//                 element:<Account />,
//                 loader: () => {
//                     console.log('Loader is running');
//                     return 'Lorem ipsum'
//                 }
//             },
//             {
//                 path: 'about',
//                 element: <About />
//             },
//             {
//                 path: '*',
//                 element: <Navigate to="account" />
//             }
//         ]
//     }
// ])

// 3 sposób z działającym loaderem

const About = lazy(() => import("./About"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLayout />}>
            <Route
            path='account'
            element={<Account />}
            loader={() => {
                console.log('Loader is running');
                return 'Lorem ipsum'
            }} />
            <Route
             path='about'
             loader={aboutLoader} 
            lazy={()=> import('./RootAbout')}
            element={<About /> }
            />
            <Route
            path='create'
            element={<Create />}
            action={ async ({request}) => {
                const data = await request.formData()
                console.log('handling action', data.get('title'))
                
                return new Promise (resolve => {
                    setTimeout(() => {
                        resolve([data.get('title')])
                    }, 1000)
                })
            }}
            />
            <Route path='*' element={<Navigate to='Account' />} />
        </Route>
    )
)


export const AppOdcinek95 = () => {
    return (
        <RouterProvider router={router} />
    )
}