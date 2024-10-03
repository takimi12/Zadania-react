import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { MainLayout } from "./MainLayout"
import { Account } from "../odcinek95/Account"
import { Suspense, lazy } from "react";
import { aboutLoader } from "../odcinek95/AboutLoader";
import { Create } from "../odcinek95/Create";
import { AwaitedData } from "./AwaitedData";
import { FakeLoader } from "./fake";


const About = lazy(() => import("../odcinek95/About"));

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
            lazy={()=> import('../odcinek95/RootAbout')}
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

            <Route
            path='await'
            element={<AwaitedData />}
            loader={FakeLoader}
            />


            <Route path='*' element={<Navigate to='Account' />} />
        </Route>
    )
)


export const AppOdcinek96 = () => {
    return (
        <RouterProvider router={router} />
    )
}