import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import TodaysTasksIcon from "../../assets/icons/todays-icon.svg";
import AllTodosIcon from "../../assets/icons/all-todos-icon.svg";
import TasksIcon from "../../assets/icons/tasks-icon.svg";
import SignOutIcon from "../../assets/icons/sign-out-icon.svg";

const Navigation = () => {
  return (
    <nav className="navbar h-full bg-dark flex flex-col items-center lg:justify-between p-2 rounded-t-3xl lg:rounded-r-3xl lg:rounded-t-none">
      <Link
        to="profile"
        className="flex items-center justify-center w-full lg:w-auto mb-4 lg:mb-0"
      >
        <img className="w-8" src={ProfileIcon} alt="Profile Icon" />
        <p className="text-light hidden lg:inline ml-2">John Doe</p>
      </Link>

      <ul className="navbar__list flex lg:flex-col mt-4 space-x-4 lg:space-x-0 lg:space-y-4">
        <li>
          <Link
            className="flex items-center hover:bg-black p-2 rounded lg:w-full"
            to="today-tasks"
          >
            <img className="w-6" src={TodaysTasksIcon} alt="Today Tasks Icon" />
            <span className="text-light hidden lg:inline ml-2">
              Today Tasks
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center hover:bg-black p-2 rounded lg:w-full"
            to="all-todos"
          >
            <img className="w-6" src={AllTodosIcon} alt="All Todos Icon" />
            <span className="text-light hidden lg:inline ml-2">All Todos</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center hover:bg-black p-2 rounded lg:w-full"
            to="tasks"
          >
            <img className="w-6" src={TasksIcon} alt="Tasks Icon" />
            <span className="text-light hidden lg:inline ml-2">Tasks</span>
          </Link>
        </li>
      </ul>

      <div className="navbar__button flex items-center mt-4">
        <img className="w-6" src={SignOutIcon} alt="Sign Out Icon" />
        <span className="text-light hidden lg:inline ml-2">Sign Out</span>
      </div>
    </nav>
  );
};

export default Navigation;
