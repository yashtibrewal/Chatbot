

export function sendMessageToServer() {
    return new Promise((resolve,reject) => {

        setTimeout(()=> {
            resolve(true);
        },1000)
    
    })
}

export function getMessagesFromServer() {
    return new Promise((resolve,reject) => {

        setTimeout(()=> {
            resolve([{
                sender:true,
                message:"Welcome to the chat!"
            }]);
        },1000)
    
    })
}
