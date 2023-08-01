import { FC, useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/store'
import { fetchActiveChats } from '../../store/slices/chats/chatsSLice'
import { chatsSelector } from '../../store/slices/chats/selectors'
import { setActiveId } from '../../store/slices/activeItem/activeItem'
import { ChatItem } from '../ChatItem/ChatItem'
import axios from 'axios'
import classNames from 'classnames'
import styles from './ChatItemList.module.scss'

export const ChatItemList: FC = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(chatsSelector)
  
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  
  useEffect(() => {
    dispatch(fetchActiveChats())
  }, [])

  const onClick = (index: number) => () => {
    setActiveIndex(index)
    dispatch(setActiveId(store[index].id))
  }
  
  return (
    <aside className={classNames(styles.root)}>
      <div className={classNames(styles.aside_header)}>
        <h3>All chats</h3>
      </div>
      <div className={classNames(styles.chat_container)}>
        {
          store.map((item, index) => (
            <ChatItem
              props={item}
              isActive={(index === activeIndex)}
              onClick={onClick(index)}
              key={item.id}
            />
          ))
        }
      </div>
      <div className={classNames(styles.last)}></div>
    </aside>
  )
} 