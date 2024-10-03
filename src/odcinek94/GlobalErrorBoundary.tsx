import { useRouteError } from "react-router-dom"

export const GlobalErrorBoundary = () => {
    
    const error = useRouteError()

    
    return (
        <div>
            <h1>Error</h1>
            <p>I have no idea went wrong...</p>
        </div>
    )
}