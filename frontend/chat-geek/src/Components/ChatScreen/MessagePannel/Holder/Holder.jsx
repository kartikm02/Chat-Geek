import "./Holder.css";
import MessageComponent from "../MessageComponent/MessageComponent";
import DetailsPannel from "../PersonalDetails/DetailsPannel";
import SearchBar from "../SearchBar/SearchBar";

const Holder = () => {
    return (
    <div className="holder">
        <DetailsPannel />
        <SearchBar />
        <MessageComponent />
        <MessageComponent />
        <MessageComponent />
        <MessageComponent />
        <MessageComponent />
        <MessageComponent />
        <MessageComponent />
        <MessageComponent />
        <MessageComponent />
        <MessageComponent />
    </div>
    )
}

export default Holder;