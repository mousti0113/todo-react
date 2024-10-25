import "./App.css";
import Header from "./Components/Header";

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
     </>
  );
}

export default App;
