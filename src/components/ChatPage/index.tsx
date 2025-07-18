
import styles from './style.module.css'
import ChatHead from '../ChatHead'
import ChatMessage from '../ChatMessage'
import ChatInput from '../ChatInput'
export default function ChatPage(){

    return(
        <div className={styles.chatPage}>
            <ChatHead></ChatHead>
            <ChatMessage></ChatMessage>
            <ChatInput></ChatInput>
        </div>
    ) 
    
}