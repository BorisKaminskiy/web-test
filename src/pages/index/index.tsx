import React, {FC} from "react";
import { IPage } from "../../interface/page";
import { Header } from '../../components/Header/Header';
import { ChatItemList } from '../../components/ChatItemsList/ChatItemList';
import { MessageList } from '../../components/MessageList/MessageList';
import { Input } from '../../components/Input/Input';
import classNames from 'classnames';
import styles from './index.module.scss'

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;

    return (
    <div className={classNames(styles.root)}>
      <ChatItemList /> 
      <div className={classNames(styles.messages)}>    
        <Header />
        <MessageList />
        <Input/>
      </div>
    </div>
    )
}