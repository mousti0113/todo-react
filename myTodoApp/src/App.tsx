import "./App.css";
import Header from "./Components/Header";
import TODOHero from "./Components/TODOHero";
import TODOList from "./Components/TODOList";
import Form from "./Components/Form";
("use client");
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([
    { title: "Some task", id: self.crypto.randomUUID(), is_completed: false },
    {
      title: "Some other task",
      id: self.crypto.randomUUID(),
      is_completed: true,
    },
    { title: "last task", id: self.crypto.randomUUID(), is_completed: false },
  ]);
  return (
    <>
      <Header />
      <TODOHero nums_todos_completati={0} num_totale_todo={10} />
      <Form />
      <TODOList todos={todos} />
    </>
  );
}

export default App;
