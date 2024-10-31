import { Task } from "./types";
export const getEncouragingMessage = (): string => {
  const messages = [
    "Complimenti! Hai completato un task! 🎉",
    "Ottimo lavoro! Continua così! 💪",
    "Un altro task completato, sei fantastico! ⭐",
    "Stai andando alla grande! 🌟",
    "Che produttività! Continua così! 🚀",
    "Sei inarrestabile oggi! 💫",
    "Ecco un altro successo! 🏆",
    "Un task alla volta, stai facendo un ottimo lavoro! 🌈",
    "Fantastico! Continua a dare il massimo! 🔥",
    "Che soddisfazione completare i task, vero? 🎯"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

export const saveToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const loadFromLocalStorage = (): Task[] => {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    return JSON.parse(saved).map((task: any) => ({
      ...task,
      createdAt: new Date(task.createdAt)
    }));
  }
  return [];
};