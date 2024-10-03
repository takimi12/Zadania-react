import { useLocation, useSearchParams } from "react-router-dom";

export const Payment = () => {


    const location = useLocation();
    const [searchParams,setSearchParams] = useSearchParams()


    // console.log('Location', location)
    // console.log('Search Params get all', searchParams.getAll('paymentId'));
    // console.log('search params get', searchParams.get('paymentid'));
    // console.log('search params', [...searchParams.entries()])

    const status = searchParams.get('paymentStatus')
    const id = searchParams.get('paymentId')

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchParams({
    //             loremIpsum: 'dolor sit amet'
    //         })
    //     }, 2000)
    // }, [])
    return (
        <div>
            <h1>payment</h1>
        </div>
    )
}