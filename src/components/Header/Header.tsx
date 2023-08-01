import { FC } from 'react'
import { Icon } from '../Icon/Icon'
import { Chat } from '../Svg/Svg'
import icon from '../../assets/svg/Chat.svg'
import classNames from 'classnames'
import styles from './Header.module.scss'

export const Header: FC = () => {

  return (
    <header className={classNames(styles.root)}>
      <Icon><Chat /></Icon>
      <h3>Great Project</h3>
    </header>
  )
} 