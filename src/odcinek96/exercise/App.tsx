import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { Tasks } from "./TasksTsx";
import { tasksLoader } from "./loadertasks";
import { SingleTask } from "./SingleTask";
import { taskLoader } from "./taskLoader";
import { AddTask } from "./AddTask";
import { addTaskAction } from "./addTaskAction";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Tasks />,
        loader: tasksLoader,
      },
      {
        path:'create',
        element: <AddTask />,
        action: addTaskAction
      },
      {
        path: '/:id',
        element: <SingleTask />,
        loader: taskLoader,
      },
    ],
  },
]);

export const AppExOdcinek96 = () => {
  return <RouterProvider router={router} />;
};
