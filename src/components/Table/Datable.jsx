import React from 'react'
import s from './Datable.module.scss'
import Refresh from '../../icons/refresh.svg'
import { ReadMessages } from '../Messages/ReadMessages'
import { UnreadMessages } from '../Messages/UnreadMessages'
import { refreshData } from '../../common/refreshData'
import { amountOfClients } from '../../common/amountOfClients'

const Datable = ({ query, readMessages, unreadMessages, setReadMessages, setUnreadMessages }) => {
    const amount = readMessages.length + unreadMessages.length
    return (
        <>
            <div className={s.header}>
                <img src={Refresh} alt='Обновить' onClick={() => {return (setReadMessages([]), refreshData(setReadMessages, setUnreadMessages))}}/>
                {amountOfClients(amount, query)}
            </div>
            <table className={s.table}>
                <tbody>
                    <ReadMessages readMessages={readMessages} setReadMessages={setReadMessages} setUnreadMessages={setUnreadMessages}/>
                    <UnreadMessages unreadMessages={unreadMessages} setUnreadMessages={setUnreadMessages} setReadMessages={setReadMessages}/>
                </tbody>
            </table>
            <div className={s.pagination}>1 2 3 ... 4 5 6</div>
        </>
    )
}

export default Datable