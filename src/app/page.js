"use client";

import { useEffect, useState } from "react";
import GreetingCard from "./components/GreetingCard";
import InputSection from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="flex justify-center p-[20px] ">
      <div className="flex flex-col justify-center">
        <GreetingCard />
        <InputSection />
        <TodoList />
      </div>
    </div>
  );
}
