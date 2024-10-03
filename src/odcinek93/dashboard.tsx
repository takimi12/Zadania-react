import { useUser, User } from "./useGetUser"

export const Dashboard = () => {

const {user} = useUser()

    if(!data) return null
    
    
    return (
        <div>
    <h1>Hello You are authenthicaed User I guess?</h1>
        You are {data?.name} with id ({data?.id})
    </div>
    )
}