import "./DetailsPannel.css";
import UserImg from "../../../../images/user.png";


const DetailsPannel = () => {
    return (
        <div className="detailsPannel">
            <div className="myImg">
                <img src={UserImg} alt="ME" />
            </div>
            <div className="sectionPannel">
                <h1>Messages</h1>
            </div>
        </div>
    )
}

export default DetailsPannel;