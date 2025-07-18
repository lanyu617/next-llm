"use client"
import styles from './style.module.css'
import { useState ,useMemo} from 'react';
import { useDispatch } from 'react-redux';
import { messageAdded } from '@/store/reducers/sessionReduce'
export default function ChatInput() {
    const [inputValue, setInputValue] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const btnDisabled:boolean = useMemo(()=>{
        return !inputValue.trim() || loading
    }, [inputValue, loading])
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value)
    }
    const handleSendClick = async () => {
        if(!inputValue.trim()) return
        
        try{
            setLoading(true)
            setInputValue('')
            dispatch(
                messageAdded({
                    sessionId: '1',
                    message: {
                        id: Date.now().toString(),
                        role: 'user',
                        content: inputValue.trim()
                    }}
                )
            )
            await new Promise((resolve) => setTimeout(
                ()=>{
                    dispatch(
                        messageAdded({
                            sessionId: '1',
                            message: {
                                id: Date.now().toString(),
                                role: 'assistant',
                                content: generateRandomCharsFast(20000)
                        }})
                    )
                    resolve('')
                }, 1000))
            console.log('Sending message:', inputValue)
            
        }catch{

        }finally{
            setLoading(false)
        }
    }
    const generateRandomCharsFast=(length:number)=> {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array(length)
            .fill('')
            .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
            .join('');
    }
    return (
        <div className={styles.chatInput}>
            <textarea className={styles.inputText} value={inputValue} onChange={handleInputChange}/>
            <div className={styles.bottomZone}>
                <button className={styles.sendButton} onClick={handleSendClick} disabled={btnDisabled}>Send</button>
            </div>
        </div>
    );
}