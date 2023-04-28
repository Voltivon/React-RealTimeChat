import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
    "a8338aa1-630c-4b84-b628-e9f2405f7488",
     props.user.username,
     props.user.secret)

    return ( <div style={{height: "100vh" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow 
            {...chatProps} 
            style={{ height: '100%'}}/>
              </div>
    )
  };
  export default ChatsPage;