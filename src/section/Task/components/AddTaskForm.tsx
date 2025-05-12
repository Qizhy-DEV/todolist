import { Controller, useForm } from 'react-hook-form';
import { FormValues, taskSchema } from '@/validattions/TaskSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Task, useTask } from '@/components/Providers/TaskProvider';

const AddTaskForm = () => {
  const { addTask } = useTask();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(taskSchema),
    mode: 'onBlur',
    defaultValues: {
      title: '',
      subtitle: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    const task: Task = {
      id: new Date().toISOString(),
      isCompleted: false,
      title: data.title,
      subtitle: data.subtitle,
    };
    addTask(task);
    // onClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col items-end gap-2">
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            className="w-full focus:outline-0 h-10 rounded-md border-[1px] border-[#dfdfdf] px-2 text-sm"
            placeholder="Title"
          />
        )}
      />
      {errors.title && (
        <span className="text-[12px] w-full text-red-500 pl-1">{errors.title.message}</span>
      )}
      <Controller
        name="subtitle"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            className="w-full focus:outline-0 h-10 rounded-md border-[1px] border-[#dfdfdf] px-2 text-sm"
            placeholder="Subtitle"
          />
        )}
      />
      {errors.subtitle && (
        <span className="text-[12px] w-full text-red-500 pl-1">{errors.subtitle.message}</span>
      )}
      <button className="text-sm text-white bg-blue-300 px-4 py-2 rounded-md cursor-pointer">
        Update
      </button>
    </form>
  );
};

export default AddTaskForm;
