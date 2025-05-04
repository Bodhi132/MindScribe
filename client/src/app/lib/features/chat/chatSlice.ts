import { createSlice } from '@reduxjs/toolkit'
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { chatData,ChatState } from '@/app/types/chat'

const initialState:ChatState ={
    chats:[]
}

const counterSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    appendChat(state,action:PayloadAction<chatData>){
        state.chats.push(action.payload)
    }
  },
})

export const { appendChat } = counterSlice.actions
export default counterSlice.reducer