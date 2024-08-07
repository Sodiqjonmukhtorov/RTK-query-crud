import { useAddTaskMutation } from "../api/apiSlice";

const TaskForm = () => {
  const [addTask] = useAddTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const completed = e.target.completed.checked;

    addTask({ title, description, completed });
  };

  return (
    <div className=" py-10 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
      <h1 className="text-4xl font-bold p-3 text-center text-gray-800">To-Do App</h1>
<p className="text-lg font-medium text-center p-5 text-gray-500">Create, manage, and prioritize your tasks</p>
<form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto space-y-6">
  <h2 className="text-2xl font-semibold text-center text-gray-700">Add New Task</h2>
  <div>
    <input 
      type="text" 
      placeholder="Title" 
      name="title" 
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
    />
  </div>
  <div>
    <input 
      type="text" 
      placeholder="Description" 
      name="description" 
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
    />
  </div>
  <div className="flex items-center">
    <input 
      type="checkbox" 
      name="completed" 
      id="completed" 
      className="mr-2 text-blue-500"
    />
    <label htmlFor="completed" className="text-gray-700">Completed</label>
  </div>
  <button 
    type="submit" 
    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
  >
    Add Task
  </button>
</form>
<h1 className="text-center text-4xl font-bold text-center text-gray-800 p-20">PASTROQ</h1>
    </div>
  );
};

export default TaskForm;
