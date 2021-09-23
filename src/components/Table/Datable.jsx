import React from 'react'
import s from './Datable.module.scss'
import Refresh from '../../icons/refresh.svg'
import { ReadMessages } from '../Messages/ReadMessages'
import { UnreadMessages } from '../Messages/UnreadMessages'
import { refreshData } from '../../common/refreshData'

const Datable = ({ readMessages, unreadMessages, setReadMessages, setUnreadMessages }) => {
    return (
        <>
            <div className={s.header}>
                <img src={Refresh} alt='Обновить' onClick={() => {return (setReadMessages([]), refreshData(setReadMessages, setUnreadMessages))}}/>
                <span>Найдено 8 клиентов</span>
            </div>
            <table className={s.table}>
                <tbody>
                    <ReadMessages readMessages={readMessages} setReadMessages={setReadMessages} setUnreadMessages={setUnreadMessages}/>
                    <UnreadMessages unreadMessages={unreadMessages} setUnreadMessages={setUnreadMessages} setReadMessages={setReadMessages}/>
                </tbody>
            </table>
        </>
    )
}

export default Datable