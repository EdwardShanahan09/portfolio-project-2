import "./App.css";
import Auth from "./Auth/Auth";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Auth/SignUp/SignUp";
import Login from "./Auth/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
