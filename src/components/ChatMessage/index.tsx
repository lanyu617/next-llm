"use client"
import styles from './style.module.css'
import { useSelector } from 'react-redux'
import { useEffect,useRef } from 'react';
export default function ChatMessage() {
    const sessions = useSelector((state) => state.sessions);
    const sessionDisp=sessions[0].messages.map((msg)=>{
        return (
            msg.role === 'user'?
            <div key={msg.id} style={{display:'flex',justifyContent:'flex-end'}}>
                <div className={styles.bubble}>{msg.content}</div>
            </div>:
            <div key={msg.id} className={styles.returnContent}>{msg.content}</div>
        )
    })
    const messageContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [sessions]);
    return (
        <div className={styles.chatMessage} ref={messageContainerRef}>
            {sessionDisp}
        </div>
    );
}