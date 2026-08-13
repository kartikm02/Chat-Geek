import ChatScreen from '../ChatScreen/ChatScreen';
import TopInfoPannel from '../TopInfoPannel/TopInfoPannel';
import TypingArea from '../TypingArea/TypingArea';
import './MessageBoxHolder.css';

const MessageBoxHolder = () => {
    return (
    <div className='mainBody'>
        <TopInfoPannel />
        <ChatScreen />
        <TypingArea />
    </div>
    )
}

export default MessageBoxHolder;