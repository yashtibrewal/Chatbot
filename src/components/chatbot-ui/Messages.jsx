import Message from "./Message";
import { v4 as uuidv4} from 'uuid';


function Messages ( {messages} ) {

    return (messages && <div className="min-h-96 max-h-96 overflow-y-auto">
        {messages.map((message)=>
            <Message 
                key={uuidv4()}
                message={message}/>
        )}
    </div>)
}

export default Messages;