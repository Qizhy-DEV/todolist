import { Task as TaskInterface, useTask } from '@/components/Providers/TaskProvider';
import React from 'react';

interface Props {
  task: TaskInterface;
  onUpdateTask: (task: TaskInterface) => void;
  onDeleteTask: (task: TaskInterface) => void;
}

const Task = ({ task, onUpdateTask, onDeleteTask }: Props) => {
  const { toggleCompletion } = useTask();

  return (
    <div className="w-full flex flex-col p-4 border-[1px] border-[#efefef] gap-2 bg-[white] shadow-lg rounded-lg">
      <div className="flex items-center justify-between border-b-[1px] border-[#cdcdcd] pb-1">
        <div className="flex flex-col gap-1 w-4/5">
          <h3 className="text-[15px]">{task.title}</h3>
          <p className="text-[13px]">{task.subtitle}</p>
        </div>
        <button
          onClick={() => toggleCompletion(task.id)}
          style={{ backgroundColor: task.isCompleted ? '#5dade2' : '#e8e8e8' }}
          className="cursor-pointer transition-all duration-500 w-8 aspect-square rounded-full"
        >
          <i
            style={{ opacity: task.isCompleted ? 1 : 0 }}
            className="text-[white] transition-all duration-500 fa-solid fa-check"
          ></i>
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm">Today</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdateTask(task)}
            className="w-7 cursor-pointer text-[white] text-sm aspect-square rounded-sm bg-blue-300"
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
          <button
            onClick={() => onDeleteTask(task)}
            className="w-7 cursor-pointer text-white text-sm aspect-square rounded-sm bg-red-300"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
