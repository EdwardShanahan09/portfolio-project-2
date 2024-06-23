import { useState } from "react";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import CreateCategoryModal from "../CreateCategoryModel/CreateCategoryModel";

const CreateCategoryBox = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOpenModel = () => setIsModelOpen(true);
  const handleCloseModel = () => setIsModelOpen(false);

  return (
    <div>
      <div onClick={handleOpenModel}>
        <img src={PlusIcon} alt="Plus Icon" />
      </div>

      <p className="text-sm">New Category</p>

      <CreateCategoryModal
        isOpen={isModelOpen}
        onClose={handleCloseModel}
        onCreate={""}
      />
    </div>
  );
};

export default CreateCategoryBox;
