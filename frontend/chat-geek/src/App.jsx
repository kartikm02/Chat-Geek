import "./App.css";
import ChatPage from "./Components/ChatScreen/ChatPage/ChatPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import MessageBoxHolder from './Components/ChatScreen/MessageBox/MessageBoxHolder/MessageBoxHolder';
// import SignupPage from './Components/Signup/SignupPage/signupPage';
// import LoginPage from './Components/Signup/SignupPage/signupPage';
// import Holder from './Components/ChatScreen/MessagePannel/Holder/Holder';
// import SideBar from './Components/ChatScreen/SideBar/SideBar';
// import TypingArea from './Components/ChatScreen/MessageBox/TypingArea/TypingArea';
// import LoginPage from './Components/ChatScreen/SideBar/LoginPage'
// import TopInfoPannel from './Components/ChatScreen/MessageBox/TopInfoPannel/TopInfoPannel';
import LoginPage from "./Components/Login/Loginpage/loginPage";

function App() {
  const isLoggedIn = true;
  return (
    <BrowserRouter>
      {/* common */}
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <ChatPage /> : <Navigate to="/login" />}
        />{" "}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* common */}
    </BrowserRouter>
  );
}

export default App;
