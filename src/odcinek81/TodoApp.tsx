import { useApi } from "./useApi";
import {Todo} from "./index"
import { useEffect, useState } from "react";
import { SingleTodo } from "./SingleToDo";
import { useTodos } from "./useTodos";
import { TodoForm } from "../komunikacjaAPI/exercise1/20TodoForm";

export const Odcinek81 = () => {
    const {data, loading, error, removeTodo, addTodo} = useTodos();


    if(loading) return <p> loading</p>
    if(error) return <p> {error} </p>

    return (
        <>
        <TodoForm onNewTodo={addTodo} />
        <ul>
            {data?.map(element => <SingleTodo key={element.id}  onTodoRemove={removeTodo} element={element}/>)}
        </ul>
        </>
    )
}