"use client";

import { useEffect, useState } from "react"

export default function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("/api/todos")
            .then((res) => res.json())
            .then((data) => {
                setTodos(data)
            })

    }, [])

    return (
        <div>
            <div>
                {todos.map((todo) => (
                    <div key={todo.id} className="flex justify-between p-2 bg-slate-300 m-2 rounded-md">
                        <div>{todo.title}</div>
                        <div>
                            <button className="text-red-500 px-2 rounded-md">Delete</button>
                            <button className="text-green-800 rounded-md">Complete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}