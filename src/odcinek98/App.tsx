import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { Infos } from "./Infos";
import { infosLoader } from "./loaders/infos";
import { AddInfo } from "./AddInfo";
import { addInfoAction } from "./actions/addInfo";
import { ErrorPage } from "./ErrorPage";
import { infoAction } from "./actions/infoAction";
import { EditInfo } from "./EditInfo";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children:[ {
            path: '/',
            element: <Infos />,
            loader: infosLoader,
            action: infoAction
            
        }, {
          path: ':id',
          element: <EditInfo />,
          loader:infosLoader
        },
        
        {
            path: 'add',
            element: <AddInfo />,
            action: addInfoAction,
        }],
        errorElement: <ErrorPage />
    }
])

export const AppOdcinek98 = () => {
  return (
    <RouterProvider router={router} />
  );
}
