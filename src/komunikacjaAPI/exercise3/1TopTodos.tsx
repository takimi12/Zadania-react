import React from 'react'
import {useTopTodos} from "./2useTopTodos"

export const TopTodos =() => {
    const {topTodos} = useTopTodos();

    return (
        <div>
            <h2>Top 5 Todos</h2>
            {
                topTodos.map(todo => <li key={todo.id}>{todo.title}</li>)
            }
        </div>
    )
}