import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import TodaysTasksIcon from "../../assets/icons/todays-icon.svg";
import AllTodosIcon from "../../assets/icons/all-todos-icon.svg";
import TasksIcon from "../../assets/icons/tasks-icon.svg";
const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="profile">
        <img src={ProfileIcon} alt="Profile Icon" />
        <p>John Doe</p>
      </Link>

      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="today-tasks">
            <img src={TodaysTasksIcon} alt="Today Tasks Icon" />
            <span>Today Tasks</span>
          </Link>
        </li>
        <li>
          <Link to="all-todos">
            <img src={AllTodosIcon} alt="Today Tasks Icon" />
            <span>All Todos</span>
          </Link>
        </li>
        <li>
          <Link to="tasks">
            <img src={TasksIcon} alt="Tasks Icon" />
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
