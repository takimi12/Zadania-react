import { useRouteError,isRouteErrorResponse } from "react-router-dom"

export const ErrorElement = () => {

    const error = useRouteError() as string;

    console.log('Error', error)


    const formatError = (appError: unknown) => {

        if(typeof appError === 'string') return appError;

        if(isRouteErrorResponse(appError)) {
            return appError.data
        }

        if(appError instanceof Error) {
            return appError.message
        }
    }

    return (
        <div>
            <h1>Eror</h1>
            <p>Something went wrong!- {formatError(error)}</p>
        </div>
    )
}