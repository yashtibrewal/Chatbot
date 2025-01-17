
import PropTypes from "prop-types";

function Message({message}) {
    return <div className="flex flex-col text-white">
        { message.sender ? <div className={`mx-1 rounded rounded-tl-none p-2 w-fit mt-2 ${message.sender ? 'text-left bg-green-500' : 'text-right bg-blue-500'}`}>
                {message.message}
            </div> :
            <div className={`mx-1 rounded rounded-tr-none p-2 w-fit mt-2 ${message.sender ? 'text-left bg-green-500' : 'text-right bg-blue-500'}`}>
            {message.message}
        </div>}
    </div> 


}

// Define prop types for the Message component
Message.propTypes = {
    message: PropTypes.shape({
      sender: PropTypes.bool.isRequired, // Indicates whether the sender is true/false
      message: PropTypes.string.isRequired, // Message content
    }).isRequired,
  };
  
export default Message;