import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const filePath = path.resolve("src", "todos.json");
console.log(filePath);

const readTodos = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const writeTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
};

export function GET(req) {
  const todos = readTodos();
  return NextResponse.json(todos);
}
export async function POST(request) {
  const a = await request.json();
  const { title } = a;
  console.log(title);
  const todos = readTodos();
  const newTodo = { id: Date.now(), title };
  todos.push(newTodo);
  writeTodos(todos);
  return NextResponse.json(newTodo);
}
