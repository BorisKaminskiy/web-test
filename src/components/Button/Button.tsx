import { FC } from 'react';
import { ButtonProps } from './Button.types';
import classNames from 'classnames';
import styles from './Button.module.scss'

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'iconButton',
  background = 'transparent'
}) => {

  const buttonStyles = {
    iconButton: styles.iconButton,
  } 

  const buttonBackground = {
    transparent: styles.transparent,
    gray: styles.gray
  }

  
  return (
    <div
      onClick={onClick}
      className={classNames(styles.root, buttonStyles[variant], buttonBackground[background])}
    >
      { children }
    </div>
  )
}