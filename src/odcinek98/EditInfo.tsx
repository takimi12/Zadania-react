import { Form, useActionData, useLoaderData } from "react-router-dom"
import {  useState } from "react";
import { SingleInfo } from "./type";

export const EditInfo = () => {
    const data = useLoaderData() as SingleInfo;

    const [title, setTitle] = useState(data?.title);



    return (
        <div>
            <h1>Create new info</h1>
            <Form method="PUT" >
            <input type="text" name="title" value={title} onChange={(e => setTitle(e.target.value))} />
            <input type="hidden" name="id" value={data.id}  />
            
            <button type="submit">Update Info</button>
            </Form>
        </div>
    )
}