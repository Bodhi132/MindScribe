export type chatData = {
    id:string,
    sender:'user' | 'ai',
    text:string,
    timeStamp:Date
}

export interface ChatState {
    chats:chatData[]
}