import { Form, useActionData } from "react-router-dom"
import { SingleTask } from "./tasks"

export const AddTask = () => {
    const data = useActionData() as SingleTask | null

    return (
        <div>
            <h1>Create new task</h1>
            <Form method="POST">
                <input type="text" name="title" />
                <textarea name="description" />
                <button type="submit">Add task</button>
            </Form>
            {data ? <p>Task {data.title} was created succesfully!</p> : null }
        </div>
    )
}