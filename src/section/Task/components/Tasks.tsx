import Task from '@/components/Task';
import { Task as TaskInterface, TaskFilter, useTask } from '@/components/Providers/TaskProvider';
import React from 'react';

interface Props {
  currentFilter: TaskFilter;
  onUpdateTask: (task: TaskInterface) => void;
  onDeleteTask: (task: TaskInterface) => void;
}

const Tasks = ({ currentFilter, onUpdateTask, onDeleteTask }: Props) => {
  const { tasks } = useTask();

  const filterTasks = () => {
    switch (currentFilter) {
      case 'all-tasks':
        return tasks;
      case 'completed-tasks':
        return tasks.filter(item => item.isCompleted);
      default:
        return tasks;
    }
  };

  return (
    <div className="w-full grid grid-cols-4 gap-2">
      {filterTasks().map(task => (
        <Task onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask} task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
