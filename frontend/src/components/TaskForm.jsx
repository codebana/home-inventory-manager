import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const TaskForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ name: '', category: '', location: '', value: '', comment: '' });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        name: editingTask.name,
        category: editingTask.category,
        location: editingTask.location,
        value: editingTask.value,
        comment: editingTask.comment,
      });
    } else {
      setFormData({ name: '', category: '', location: '', value: '', comment: '' });
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        const response = await axiosInstance.put(`/api/tasks/${editingTask._id}`, formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setTasks(tasks.map((task) => (task._id === response.data._id ? response.data : task)));
      } else {
        const response = await axiosInstance.post('/api/tasks', formData, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setTasks([...tasks, response.data]);
      }
      setEditingTask(null);
      setFormData({ name: '', category: '', location: '', value: '', comment: '' });
    } catch (error) { console.error(error.response?.data || error.message);
      alert('Failed to save task.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded mb-6">
      <h1 className="text-2xl font-bold mb-4">{editingTask ? 'Edit Item' : 'Add Item'}</h1>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Value"
        value={formData.value}
        onChange={(e) => setFormData({ ...formData, value: Number(e.target.value) })}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Comment"
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-orange-400 text-white p-2 rounded">
        {editingTask ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
};

export default TaskForm;
