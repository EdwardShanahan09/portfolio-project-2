// src/Components/CreateCategoryModal.jsx
import { useState, useContext } from "react";
import { DbContext } from "../../Context/Db/DbContext";
import { UserContext } from "../../Context/User/UserContext";
import { useNavigate } from "react-router-dom";

const CreateCategoryModal = ({ isOpen, onClose, onCreate }) => {
  const [categoryName, setCategoryName] = useState("");
  const { currentUser } = useContext(UserContext);
  const { addCategory } = useContext(DbContext);
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!currentUser) {
      console.log("No user is logged in.");
      return;
    }

    const newCategory = {
      name: categoryName,
      createdAt: new Date(),
    };

    try {
      const categoryId = await addCategory(currentUser.uid, newCategory);
      if (categoryId) {
        onCreate(categoryName);
        setCategoryName("");
        onClose();
        navigate(`/dashboard/category/${categoryId}`);
      } else {
        console.log("Error creating category");
      }
    } catch (error) {
      console.error("Error in handleCreate: ", error);
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
