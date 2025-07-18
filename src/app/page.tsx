"use client"
import ChatPage from "@/components/ChatPage"
import { Provider } from 'react-redux'
import store from '@/store'
export default function Home() {
  return (
    <Provider store={store}>
        <ChatPage />
    </Provider>
  );
}
