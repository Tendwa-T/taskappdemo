import GreetingCard from "./components/GreetingCard";
import InputSection from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function Home() {
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
