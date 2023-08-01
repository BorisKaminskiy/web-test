import { FC, useState } from 'react';
import { IInput } from './Input.types';
import { Button } from '../Button/Button';
import { Telegramm } from '../Svg/Svg';
import { Regular } from '../Svg/Svg';
import classNames from 'classnames';
import styles from './Input.module.scss'


export const Input: FC<IInput> = ({
  onClick, 
}) => {

  const [currentMessage, setCurrentMessage] = useState<string>()

  const onChange = (e: any) => {
    setCurrentMessage(e.currentTarget.textContent)
  } 

  return (
    <div className={classNames(styles.root)}>
      <div
        onInput={onChange}
        contentEditable="true"
        data-text='Type messsage'
        className={classNames(styles.input)}
      >
      </div>
      <div className={classNames(styles.buttons)}>
        <Button
          variant='iconButton'
          background='gray'
        >
        <label htmlFor="file" className={classNames(styles.input_file)}>
          <Regular />
          <input id='file' type="file" />
        </label>
        </Button>
        <Button
          onClick = {onClick}
        >
          <Telegramm />
        </Button>
      </div>
    </div>
  )
}