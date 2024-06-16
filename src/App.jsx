import "./App.css";
import Auth from "./Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Auth/SignUp/SignUp";
import Login from "./Auth/Login/Login";
import RootLayout from "./Root/RootLayout";
import Profile from "./Root/Profile/Profile";
import Tasks from "./Root/Tasks/Tasks";
import TodayTasks from "./Root/TodayTasks/TodayTasks";
import AllTodos from "./Root/AllTodos/AllTodos";
import { useContext } from "react";
import { UserContext } from "./Context/User/UserContext";

function App() {
  const { currentUser } = useContext(UserContext);
  const isAuthenticated = !!currentUser; // Double negation to ensure boolean value

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route
          path="/dashboard"
          element={isAuthenticated ? <RootLayout /> : <Navigate to="/login" />}
        />

        <Route path="/dashboard" element={<RootLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="today-tasks" element={<TodayTasks />} />
          <Route path="all-todos" element={<AllTodos />} />
          <Route index path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
