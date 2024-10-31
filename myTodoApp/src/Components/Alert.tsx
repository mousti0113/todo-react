import React from 'react';
import { AlertCircle } from 'lucide-react';

type AlertProps = {
  message: string;
};

const Alert: React.FC<AlertProps> = ({ message }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 flex items-center gap-2">
    <AlertCircle className="h-4 w-4 text-green-500" />
    <p className="text-green-700">{message}</p>
  </div>
);

export default Alert;