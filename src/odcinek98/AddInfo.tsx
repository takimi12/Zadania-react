import { Form, useActionData } from "react-router-dom"
import { SingleInfo } from "./type"
import { useEffect, useState } from "react";

export const AddInfo = () => {
    const data = useActionData() as SingleInfo | undefined;
    const [title, setTitle] = useState('')


    useEffect(() => {
        setTitle('')
    }, [data])

    return (
        <div>
            <h1>Create new info</h1>
            <Form method="POST" >
            <input type="text" name="title" value={title} onChange={(e => setTitle(e.target.value))} />
            <button type="submit">Add Info</button>
            </Form>

            { data ? <p>Info {data.title} was created</p> : null}
        </div>
    )
}