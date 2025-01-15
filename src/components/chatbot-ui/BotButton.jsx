
/**
 * Will be used to open and close the bot UI
 */
function BotButton({className, onClick}) {

    return <span className={className} onClick={onClick}>
        <span className="text-white flex justify-center">Chat</span>
    </span>

}

export default BotButton;