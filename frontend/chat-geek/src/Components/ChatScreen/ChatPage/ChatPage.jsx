import "./ChatPage.css";
import SideBar from "../SideBar/SideBar";
import MessagePannel from "../MessagePannel/Holder/Holder";
import MessageBox from "../MessageBox/MessageBoxHolder/MessageBoxHolder";

const ChatPage = () => {
  return (
    <div className="MainBody">
      <SideBar />
      <MessagePannel />
      <MessageBox />
    </div>
  );
};

export default ChatPage;
