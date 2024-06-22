import PlusIcon from "../../assets/icons/PlusIcon.svg";

const CreateTaskBox = () => {
  return (
    <div>
      <div>
        <img src={PlusIcon} alt="Plus Icon" />
      </div>

      <p className="text-sm">New Task</p>
    </div>
  );
};

export default CreateTaskBox;
