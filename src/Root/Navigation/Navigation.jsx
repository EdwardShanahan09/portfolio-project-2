import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/User/UserContext";
import { DbContext } from "../../Context/Db/DbContext";
import { Link, useNavigate } from "react-router-dom";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import TodaysTasksIcon from "../../assets/icons/todays-icon.svg";
import AllTodosIcon from "../../assets/icons/all-todos-icon.svg";
import TasksIcon from "../../assets/icons/tasks-icon.svg";
import SignOutIcon from "../../assets/icons/sign-out-icon.svg";
import { signOutUser } from "../../lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase/firebase";

const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const [displayName, setDisplayName] = useState(null);
  const { getUserDisplayName } = useContext(DbContext);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser && currentUser.uid) {
        const name = await getUserDisplayName(currentUser.uid);

        setDisplayName(name);
      }
    };
    fetchUserData();
  }, [currentUser, getUserDisplayName]);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="navbar h-full bg-dark flex lg:flex-col items-center justify-between p-6 lg:px-0">
      <Link to="profile" className="flex flex-col items-center">
        <img className="w-6 lg:w-8 mb-2" src={ProfileIcon} alt="Profile Icon" />
        <p className="text-light hidden lg:inline ml-2">
          {displayName ? displayName : "Loading...."}
        </p>
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
            to="categories"
          >
            <img className="w-6" src={TasksIcon} alt="Tasks Icon" />
            <span className="text-light hidden lg:inline ml-2">Categories</span>
          </Link>
        </li>
      </ul>

      <div
        onClick={handleSignOut}
        className="navbar__button flex items-center mt-4"
      >
        <img className="w-6" src={SignOutIcon} alt="Sign Out Icon" />
        <span className="text-light hidden lg:inline ml-2">Sign Out</span>
      </div>
    </nav>
  );
};

export default Navigation;
