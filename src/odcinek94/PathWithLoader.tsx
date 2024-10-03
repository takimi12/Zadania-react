import { useLoaderData } from "react-router-dom";

export const DataComponent = () => {
const data = useLoaderData() as string;
    console.log(data, 'render');


    return <h1>{data}</h1>
}