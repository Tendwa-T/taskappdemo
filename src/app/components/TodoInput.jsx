"use client"

import { useState } from "react"

export default function InputSection() {
    const [title, setTitle] = useState()
    function handleChange(e) {
        setTitle(e.target.value)
        console.log(title)
    }

    async function submitData() {
        const res = await fetch('/api/todos/', {
            method: 'POST',
            body: JSON.stringify({ title }),
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(res.json())
    }

    return (
        <div className="m-2">
            <input
                id="todo-text"
                placeholder="New Todo Item"
                className="p-2 border border-black"
                onBlur={handleChange}
            />
            <button
                onClick={submitData}
                className="bg-teal-300 w-[100px] h-[40px]">
                Add Item
            </button>
        </div>
    )
}