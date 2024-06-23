import { useState } from "react";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import CreateTaskModal from "../CreateTaskModel/CreateTaskModel";

const CreateTaskBox = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOpenModel = () => setIsModelOpen(true);
  const handleCloseModel = () => setIsModelOpen(false);

  return (
    <div>
      <div onClick={handleOpenModel}>
        <img src={PlusIcon} alt="Plus Icon" />
      </div>

      <p className="text-sm">New Task</p>

      <CreateTaskModal
        isOpen={isModelOpen}
        onClose={handleCloseModel}
        onCreate={""}
      />
    </div>
  );
};

export default CreateTaskBox;
