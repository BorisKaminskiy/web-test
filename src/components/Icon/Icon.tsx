import { FC } from 'react';
import { IconProps } from './Icon.types';
import classNames from 'classnames';
import styles from './Icon.module.scss'

export const Icon: FC<IconProps> = ({
  children,
}) => {

  return (
    <div className={classNames(styles.root)}>
      { children }
    </div>
  )
}