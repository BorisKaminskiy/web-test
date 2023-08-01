import { FC } from 'react';
import { ITime } from './Time.types';
import classNames from 'classnames';
import styles from './Time.module.scss'


export const Time: FC<ITime> = ({
  dateInfo,
  type = 'time'
}) => {

  const date = new Date(dateInfo)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
 

  return (
    <span className={classNames(styles.root)}
    >
      {(type === 'time') &&
        <span className={classNames(styles.time)}>
          {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}
        </span>
      }
      
      {(type === 'date') &&
        <span className={classNames(styles.date)}>{day < 10 ? '0' + day : day}.{month < 10 ? '0' + month : month}.{ year }</span>
      }

    </span>
  )
}