// This file is responsible for handling the API requests for the todos route.
import { NextResponse } from "next/server";

const prisma = require("../../../../lib/prisma");

async function readTodos() {
  const todos = await prisma.todo.findMany();
  return todos;
}

async function writeTodos(todos) {
  await prisma.todo.create({
    data: {
      title: todos.title,
    },
  });
}
// TODO: Implement the deleteTodos
async function deleteTodos(id) {}

// TODO: Implement the updateTodos
async function updateTodos(id, todos) {}

export async function GET(req) {
  const todos = await readTodos();
  return NextResponse.json(todos);
}
export async function POST(request) {
  const requestBody = await request.json();
  const { title } = requestBody;
  const newTodo = { title };
  await writeTodos(newTodo);
  return NextResponse.json(newTodo);
}
