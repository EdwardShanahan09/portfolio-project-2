import "./App.css";
import Auth from "./Auth/Auth";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Auth/SignUp/SignUp";
import Login from "./Auth/Login/Login";
import RootLayout from "./Root/RootLayout";
import Profile from "./Root/Profile/Profile";
import Tasks from "./Root/Tasks/Tasks";
import TodayTasks from "./Root/TodayTasks/TodayTasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<RootLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="todays-taks" element={<TodayTasks />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
