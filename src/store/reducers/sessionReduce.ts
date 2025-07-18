"use client"
import { createSlice } from '@reduxjs/toolkit'

interface Session{
    id: string;
    messages: MessageItem[]
}
interface MessageItem{
    id: string,
    role: 'user' | 'assistant',
    content: string
}
const sessionState:Session[]=[{id: '1', messages: [{id:"111",role: 'user', content: 'Hello!'},{id:"222",role: 'assistant', content: 'Hi there!'}]}]

const sessionSlice = createSlice({
    name: 'sessionMessages',
    initialState: sessionState,
    reducers: {
        sessionAdded(state, action) {
            state.push(action.payload)
        },
        messageAdded(state, action) {
            const { sessionId, message } = action.payload
            const session = state.find(s => s.id === sessionId)
            if (session) {
                session.messages.push(message)
            }
        }
    }}
)
export const { sessionAdded ,messageAdded} = sessionSlice.actions
export const sessionReducer = sessionSlice.reducer