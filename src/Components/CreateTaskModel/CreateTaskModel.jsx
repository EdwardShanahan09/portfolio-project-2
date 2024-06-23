// src/Components/CreateTaskModal.jsx
import { useState, useContext } from "react";
import { DbContext } from "../../Context/Db/DbContext";

const CreateTaskModal = ({ isOpen, onClose, onCreate }) => {
  const [taskName, setTaskName] = useState("");
  const { addTask } = useContext(DbContext);

  const handleCreate = async () => {
    const newTask = {
      name: taskName,
      createdAt: new Date(),
    };

    const taskId = await addTask(newTask);

    if (taskId) {
      onCreate(taskName);
      setTaskName("");
      onClose();
    } else {
      console.log("Error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">Create New Task</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
