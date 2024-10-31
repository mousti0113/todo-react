
import { Task } from './types';

type ProgressProps = {
  tasks: Task[];
};

export const Progress = ({ tasks }: ProgressProps) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progresso</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-sm text-white-600">
        {completedTasks} su {totalTasks} task completati
      </div>
    </div>
  );
};
