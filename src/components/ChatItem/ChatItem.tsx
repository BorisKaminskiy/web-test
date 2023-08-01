import { FC } from 'react';
import { IChatItem } from './ChatItem.types';
import { Avatar } from '../Avatar';
import { Time } from '../Time/Time';
import classNames from 'classnames';
import styles from './ChatItem.module.scss'


export const ChatItem: FC<IChatItem> = ({
  props,
  isActive,
  onClick
}) => {

  const {
    id,
    created_at,
    title,
    avatar,
    // private,
    last_message,
    count_unread,
    users } = props

  
  return (
    <div
      className={classNames(styles.root, isActive ? styles.active : styles.hover)}
      onClick={onClick}
    >
      <Avatar
        src={avatar}
        size='md'
      />
      
      <div className={classNames(styles.item_description)}>
        <div className={classNames('body_bold', styles.item_title)}>
          <div className={styles.title_name}>
            { title }
          </div>
          <Time dateInfo={created_at} />
        </div>
        <div className={classNames('body_text', styles.paragraph)}>
           {last_message.message }
        </div>
      </div>
    </div>
  )
}