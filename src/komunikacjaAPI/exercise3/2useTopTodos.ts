import { useTodos } from "../exercise1/9useTodos"


export const useTopTodos = () => {
    const {data} = useTodos();

    return {
        topTodos: data ? data.slice(0,5): []
    }
}