'use client';

import React, { useState } from 'react';
import Filter from './components/Filter';
import Tasks from './components/Tasks';
import TaskProvider, {
  Task as TaskInterface,
  TaskFilter,
} from '@/components/Providers/TaskProvider';
import AddNewModal from '@/components/Modal/components/AddNewModal';
import UpdateModal from '@/components/Modal/components/UpdateModal';
import DeleteModal from '@/components/Modal/components/DeleteModal';
import AddTaskModal from '@/section/Task/components/AddTaskModal';
import ConfirmDeleteTaskModal from '@/section/Task/components/ConfirmDeleteTaskModal';

const Task = () => {
  const [currentFilter, setCurrentFilter] = useState<TaskFilter>('all-tasks');

  const [currentTask, setCurrentTask] = useState<TaskInterface>();

  const [currentId, setCurrentId] = useState<string>();

  const [addTaskVisible, setAddTaskVisible] = useState(false);

  const [updateTaskVisible, setUpdateTaskVisible] = useState(false);

  const [deleteTaskVisible, setDeleteTaskVisible] = useState(false);

  return (
    <TaskProvider>
      {/*<AddNewModal*/}
      {/*  title="Add New Task"*/}
      {/*  visible={addTaskVisible}*/}
      {/*  onClose={() => setAddTaskVisible(false)}*/}
      {/*/>*/}
      <AddTaskModal visible={addTaskVisible} onClose={() => setAddTaskVisible(false)} />

      <UpdateModal
        title="Update Task"
        visible={updateTaskVisible}
        currentTask={currentTask}
        onClose={() => setUpdateTaskVisible(false)}
      />
      {/*<DeleteModal*/}
      {/*  title="Confirmation"*/}
      {/*  subtitle="Are you sure about delete this task"*/}
      {/*  taskId={currentId}*/}
      {/*  onClose={() => setDeleteTaskVisible(false)}*/}
      {/*  visible={deleteTaskVisible}*/}
      {/*/>*/}
      <ConfirmDeleteTaskModal
        visible={deleteTaskVisible}
        onClose={() => setDeleteTaskVisible(false)}
        task={currentTask}
      />

      <div className="w-full h-screen px-[2%] py-[2%] gap-[1rem] flex flex-col">
        <Filter
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          onAddTask={() => setAddTaskVisible(true)}
        />
        <Tasks
          currentFilter={currentFilter}
          onDeleteTask={task => {
            setDeleteTaskVisible(true);
            setCurrentId(task.id);

            // For temp
            setCurrentTask(task);
          }}
          onUpdateTask={(task: TaskInterface) => {
            setCurrentTask(task);
            setUpdateTaskVisible(true);
          }}
        />
      </div>
    </TaskProvider>
  );
};

export default Task;
