import { FC } from 'react';
import { IMessageProps } from './Message.types';
import { Avatar } from '../Avatar';
import { Time } from '../Time/Time';
import { Readed } from '../Svg/Svg';
import classNames from 'classnames';
import styles from './Message.module.scss'


export const Message: FC<IMessageProps> = ({
  message,
  double = false,
  my = false,
  main
}) => {
  console.log(message)
  return (
    <div className={classNames(styles.root)}> 
      {/* <div className={classNames(styles.date)}>aaa</div> */}
     
      <div className={classNames(styles.message_container, my && styles.my)}>
        {message.user.avatar
            ? (my ? <span></span> : <Avatar src={ message.user.avatar }></Avatar>)
            : ''
        }
        <div className={classNames(styles.message)}>
          <div className={classNames(styles.message_title, 'body_bold')} >
          {/* { message.user.name } {message.user.surname} */}
            {!double
              ? (<span>{ message.user.name } {message.user.surname}</span>)
              : ''
          }
          </div>
          <div
            className={classNames(styles.message_body, my ? styles.message_body__my : styles.message_body__Not_my, 'body_text')}
          >
            <span>{message.message}</span>
            <div className={classNames(styles.message_time)}>
              <Time dateInfo={message.created_at} />
              <Readed/>
            </div>
          </div>
        </div>
        </div>
    </div> 
  )
}

 {/* <Time type='date' dateInfo={message.created_at}/> */}