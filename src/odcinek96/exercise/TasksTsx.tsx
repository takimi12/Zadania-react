import React from 'react'
import { Link, useLoaderData } from "react-router-dom"
import { SingleTask } from "./tasks";

export const Tasks = () => {
    const data = useLoaderData() as  SingleTask[];

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
            {data.map(task =>(
                <li key={task.id}>
                    <h2>{task.title}</h2>
                    <Link to={task.id}>Go to details</Link>    
                </li>
             
            ))}
            </ul>
        </div>
    )
}