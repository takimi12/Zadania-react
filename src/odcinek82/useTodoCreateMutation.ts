import { useEffect, useState } from "react";
import { useApi } from "../odcinek81/useApi";
import { Todo, TodoDto } from "../odcinek81/index"
import { useMutation } from "@tanstack/react-query";

export const useTodoCreate  = () => {
    const {mutate} =  useMutation({
        mutationKey: ['todos'],
        mutationFn: async (title:string) => {
            const res = await fetch(`http://localhost:3000/todos/` , {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    title
                })
            })
            return res.json()
        }
    })
    return {
        mutate
    }
}