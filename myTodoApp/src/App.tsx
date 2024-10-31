import React, { useState, useEffect } from "react";
import { Task, Filter } from "./Components/types";
import { TaskForm } from "./Components/TaskForm";
import { TaskList } from "./Components/TaskList";
import { Progress } from "./Components/Progress";
import {
  getEncouragingMessage,
  saveToLocalStorage,
  loadFromLocalStorage,
} from "./Components/utils";
import toast, { Toaster } from "react-hot-toast";
import { ListTodo } from "lucide-react";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>(loadFromLocalStorage());
  const [filter, setFilter] = useState<Filter>("tutti");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    saveToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    toast.success("Nuovo task aggiunto!");
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const newTask = { ...task, completed: !task.completed };
          if (newTask.completed) {
            // Modifica qui: usa toast.success invece di toast
            toast.success(getEncouragingMessage(), {
              duration: 2000,
              position: "bottom-right",
              style: {
                background: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#333",
              },
            });
          }
          return newTask;
        }
        return task;
      })
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task eliminato con successo!", {
      icon: "🗑️",
    });
  };

  return (
    <>
      <div
        className={`min-h-screen p-4 transition-colors ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
        }`}
      >
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: darkMode ? "#333" : "#fff",
              color: darkMode ? "#fff" : "#333",
            },
            success: {
              duration: 2000,
              iconTheme: {
                primary: "#4CAF50",
                secondary: "white",
              },
            },
          }}
        />
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold flex items-center justify-between">
              Todo App
              <ListTodo className="text-blue-700 h-10 w-10" />
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white"
            >
              {darkMode ? "☀️ Modalità Chiara" : "🌙 Modalità Scura"}
            </button>
          </div>

          <Progress tasks={tasks} />

          <TaskForm onAddTask={addTask} darkMode={darkMode} />

          <div className="flex space-x-2">
            {(["tutti", "attivi", "completati"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-4 py-2 ${
                  filter === f
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <TaskList
            tasks={tasks}
            filter={filter}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            darkMode={darkMode}
          />
        </div>
      </div>
    </>
  );
};

export default App;
