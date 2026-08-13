import "./MessageComponent.css";
import UserImg from "../../../../images/user.png";

const MessageComponent = () => {
    return (
        <div className="messageComponent">
            <div className="image">
                <img src={UserImg} alt="User" />
            </div>
            <div className="name">
                <h1>Devil Dynasty</h1>
                <p>New Message </p>
            </div>
            <div className="time">
                <p>10 min</p>
            </div>
        </div>
    )
}

export default MessageComponent; 