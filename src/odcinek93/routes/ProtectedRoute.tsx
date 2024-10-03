import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "../useGetUser"

export const ProtectedRoute = () => {


    const {user, loading}= useUser()

    if (loading) return <h1>loading...</h1>
    if(!user) return <Navigate to="" />

    return <div>
        <Outlet />
    </div>
}