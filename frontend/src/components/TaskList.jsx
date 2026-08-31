import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const TaskList = ({ tasks, setTasks, setEditingTask }) => {
  const { user } = useAuth();

  const handleDelete = async (taskId) => {
    try {
      await axiosInstance.delete(`/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      alert('Failed to delete task.');
    }
  };

  return (
    <div>
      <div className="bg-gray-100 py-2 px-4 mb-1 rounded shadow grid grid-cols-[1fr_2fr_2fr_1fr_2fr] items-center">
          <h2 className="font-bold">Name</h2>
          <h2 className="font-bold">Category</h2>
          <h2 className="font-bold">Location</h2>
          <h2 className="font-bold">Value</h2>
          <h2 className="font-bold">Actions</h2>
      </div>
      {tasks.map((task) => (
        <div key={task._id} className="bg-gray-100 py-2 px-4 mb-1 rounded shadow grid grid-cols-[1fr_2fr_2fr_1fr_2fr] items-center">
          <h2>{task.name}</h2>
          <p>{task.category}</p>
          <p>{task.location}</p>
          <p>{task.value}</p>
          <div className="mt-2">
            <button
              onClick={() => setEditingTask(task)}
              className="mr-2 bg-teal-600 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
