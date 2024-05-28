import "./App.css";
import Auth from "./Auth/Auth";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Auth/SignUp/SignUp";
import Login from "./Auth/Login/Login";
import RootLayout from "./Root/RootLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<RootLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
