import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apiSlice";

const TaskList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isLoading) {
    return <div className="text-center mt-20 text-lg font-semibold text-gray-700">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-20 text-lg font-semibold text-red-500">Error! {error.message}</div>;
  }

  return (
    <div className="flex flex-wrap items-center py-10 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-6 m-4 rounded-lg shadow-md w-full max-w-md">
          <h4 className="text-xl font-bold mb-2">{task.title}</h4>
          <h6 className="text-gray-700 mb-4">{task.description}</h6>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={task.completed}
              id={task.id}
              onChange={(e) => updateTask({
                ...task,
                completed: e.target.checked,
              })}
              className="mr-2"
            />
            <label htmlFor={task.id} className="text-gray-700">
              {task.completed ? 'Completed' : 'Not Completed'}
            </label>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 w-full"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
