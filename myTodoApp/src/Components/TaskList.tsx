
import { Task, Filter } from './types';

type TaskListProps = {
  tasks: Task[];
  filter: Filter;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  darkMode: boolean; 
};

export const TaskList = ({ 
  tasks, 
  filter, 
  onToggleTask, 
  onDeleteTask, 
  darkMode 
}: TaskListProps) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'attivi') return !task.completed;
    if (filter === 'completati') return task.completed;
    return true;
  });

  const getPriorityColor = (priority: string) => {
    if (darkMode) {
      switch (priority) {
        case 'alta': return 'bg-red-900 text-red-300';
        case 'media': return 'bg-yellow-900 text-yellow-300';
        case 'bassa': return 'bg-green-900 text-green-300';
        default: return 'bg-gray-800 text-gray-300';
      }
    } else {
      switch (priority) {
        case 'alta': return 'bg-red-100 text-red-800';
        case 'media': return 'bg-yellow-100 text-yellow-800';
        case 'bassa': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    }
  };

  return (
    <div className="space-y-2">
      {filteredTasks.map(task => (
        <div
          key={task.id}
          className={`
            flex items-center justify-between rounded-lg border p-4 transition-all 
            ${darkMode 
              ? (task.completed 
                ? 'bg-gray-800 text-gray-400 border-gray-700' 
                : 'bg-gray-900 text-white border-gray-700')
              : (task.completed 
                ? 'bg-gray-50 text-gray-500' 
                : 'bg-white text-black')
            }
          `}
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className={`
                h-5 w-5 rounded border-gray-300
                ${darkMode 
                  ? 'bg-gray-700 border-gray-600 text-blue-600' 
                  : 'bg-white border-gray-300'}
              `}
            />
            <div>
              <p className={`
                ${task.completed 
                  ? (darkMode 
                    ? 'line-through text-gray-500' 
                    : 'line-through text-gray-400')
                  : (darkMode 
                    ? 'text-white' 
                    : 'text-black')
                }
              `}>
                {task.text}
              </p>
              <span className={`
                text-sm 
                ${darkMode 
                  ? 'text-gray-500' 
                  : 'text-gray-500'}
              `}>
                Creato il: {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`
              rounded-full px-3 py-1 text-sm 
              ${getPriorityColor(task.priority)}
            `}>
              {task.priority}
            </span>
            <button
              onClick={() => onDeleteTask(task.id)}
              className={`
                rounded-lg px-3 py-1 
                ${darkMode 
                  ? 'bg-red-800 text-white hover:bg-red-700' 
                  : 'bg-red-500 text-white hover:bg-red-600'}
              `}
            >
              Elimina
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};