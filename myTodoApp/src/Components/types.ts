import { ReactNode } from 'react';

export type Priority = 'alta' | 'media' | 'bassa';

export type Task = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  priority: Priority;
};

export type Filter = 'tutti' | 'attivi' | 'completati';