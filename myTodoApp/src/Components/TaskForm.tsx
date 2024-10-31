import React, { useState } from 'react';
import { Priority, Task } from './types';

type TaskFormProps = {
  onAddTask: (task: Task) => void;
  darkMode: boolean; // Aggiungi prop per il dark mode
};

export const TaskForm = ({ onAddTask, darkMode }: TaskFormProps) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('media');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
        priority
      };
      onAddTask(newTask);
      setText('');
      setPriority('media');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Aggiungi un nuovo task..."
          className={`
            flex-1 rounded-lg border p-2 
            ${darkMode 
              ? 'bg-gray-800 text-white border-gray-700 placeholder-white-500 focus:ring-blue-600 focus:border-blue-600' 
              : 'bg-white text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }
          `}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className={`
            rounded-lg border p-2
            ${darkMode 
              ? 'bg-gray-800 text-white border-gray-700' 
              : 'bg-white text-black border-gray-300'
            }
          `}
        >
          <option 
            value="alta" 
            className={darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
          >
            Alta Priorità
          </option>
          <option 
            value="media" 
            className={darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
          >
            Media Priorità
          </option>
          <option 
            value="bassa" 
            className={darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
          >
            Bassa Priorità
          </option>
        </select>
        <button
          type="submit"
          className={`
            rounded-lg px-4 py-2 
            ${darkMode 
              ? 'bg-blue-700 text-white hover:bg-blue-600' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
            }
          `}
        >
          Aggiungi
        </button>
      </div>
    </form>
  );
};