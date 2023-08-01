import { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../store/store'
import { activeIdSelector } from '../../store/slices/activeItem/selectors'
import { IMessage } from '../../interface/page'
import { Message } from '../Message/Message'
import axios from 'axios'
import classNames from 'classnames'
import styles from './MessageList.module.scss'
import { chatsSelector } from '../../store/slices/chats/selectors'

export const MessageList: FC = () => {
  const activeId = useAppSelector(activeIdSelector)
  const [messages, setMessages] = useState<IMessage[] | []>([])
  const [newMessages, setNewMessages] = useState<IMessage[] | []>([])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const axiosConfig = {
          headers: {
            version: '0.0'
         }
        }
        const response = await axios.get(`https://api.lenzaos.com/message.get?chat_id=${activeId}&offset=0&limit=20`, axiosConfig)
          if (!response.data) {
            throw new Error(response.statusText)
          }
        response.data.response?.length && setMessages(
          response.data.response
            .filter((item: IMessage) => !item.is_new)
            .sort((a: any, b: any) => parseFloat(`${a.created_at}`) - parseFloat(`${b.created_at}`))
        )

        response.data.response?.length && setNewMessages(
          response.data.response
            .filter((item: IMessage) => item.is_new)
            .sort((a: any, b: any) => parseFloat(`${a.created_at}`) - parseFloat(`${b.created_at}`))
        )


                      
      } catch (e) {
          console.error(e)
          
      }
    }
    getMessages()
  }, [activeId])

  
  return (
    <section className={classNames(styles.root)}>
      <div className={classNames(styles.messages)}>
        {messages?.length
          ? messages.map((item, index) =>
              <Message
                double={index !== 0 && item.user.id === messages[index - 1].user.id}
                my={item.user.you}
                message={item}
                key={item.id}
                />)
          : <span></span>  
        }
      </div>
        
      {newMessages?.length
        ? <div className={classNames(styles.new_wrapper)}>
            <div className={classNames(styles.new)}>Новые сообщения</div>
    
          {newMessages.map((item, index) =>
            <Message
              double={index !== 0 && item.user.id === messages[index - 1].user.id}
              my={item.user.you}
              message={item}
              key={item.id}
            />
          )}
          
          
        
        
        </div>
        : <span></span>
      }
        
      
    </section>
  )
} 