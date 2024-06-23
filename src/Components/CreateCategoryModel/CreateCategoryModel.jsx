// src/Components/CreateTaskModal.jsx
import { useState, useContext } from "react";
import { DbContext } from "../../Context/Db/DbContext";

const CreateCategoryModal = ({ isOpen, onClose, onCreate }) => {
  const [categoryName, setCategoryName] = useState("");
  const { addCategory } = useContext(DbContext);

  const handleCreate = async () => {
    const newCategory = {
      categories: categoryName,
      createdAt: new Date(),
    };

    const categoryId = await addCategory(newCategory);

    if (categoryId) {
      onCreate(categoryName);
      setCategoryName("");
      onClose();
    } else {
      console.log("Error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">Create New Category</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
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

export default CreateCategoryModal;
