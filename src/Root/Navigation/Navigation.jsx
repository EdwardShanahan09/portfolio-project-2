import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import TodaysTasksIcon from "../../assets/icons/todays-icon.svg";
import AllTodosIcon from "../../assets/icons/all-todos-icon.svg";
import TasksIcon from "../../assets/icons/tasks-icon.svg";
const Navigation = () => {
  return (
    <nav className="navbar h-full bg-primary flex justify-between items-center direction-col flex-col p-4 rounded-r-3xl">
      <Link to="profile">
        <img className="w-8" src={ProfileIcon} alt="Profile Icon" />
        <p>John Doe</p>
      </Link>

      <ul className="navbar__list">
        <li className="flex">
          <Link className="flex" to="today-tasks">
            <img className="w-6" src={TodaysTasksIcon} alt="Today Tasks Icon" />
            <span>Today Tasks</span>
          </Link>
        </li>
        <li>
          <Link className="flex" to="all-todos">
            <img className="w-6" src={AllTodosIcon} alt="Today Tasks Icon" />
            <span>All Todos</span>
          </Link>
        </li>
        <li>
          <Link className="flex" to="tasks">
            <img className="w-6" src={TasksIcon} alt="Tasks Icon" />
            <span>Tasks</span>
          </Link>
        </li>
      </ul>

      <div className="navbar__button">
        <span>Sign Out</span>
      </div>
    </nav>
  );
};

export default Navigation;
