import React from 'react'
import Male from '../../icons/male.svg'
import Female from '../../icons/female.svg'
import Viber from '../../icons/viber.svg'
import Telegram from '../../icons/telegram.svg'
import { changeStateMessage } from '../../common/changeStateMessage'
import cn from 'classnames'
import s from './Messages.module.scss'

export const UnreadMessages = ({unreadMessages, setUnreadMessages, setReadMessages}) => {
    return (
        <>
            {
                unreadMessages.map((row) => (
                    <tr style={row.read === false ? { backgroundColor: 'rgba(120, 131, 187, 0.1)', cursor: 'pointer' } : { backgroundColor: '#fff' }}
                        key={row.id}
                        onClick={() => { changeStateMessage(row, setReadMessages, setUnreadMessages) }}>
                        <td className={s.rightCell}>
                            <div className={cn({
                                [s.male]: row.sex === 'male',
                                [s.female]: row.sex === 'female',
                            }, s.gender)}>
                                <div className={s.social}>
                                    {row.messenger === 'viber' ? <img src={Viber} alt='viber' /> :
                                        row.messenger === 'telegram' ? <img src={Telegram} alt='telegram' /> : <></>}
                                </div>
                                {row.sex === 'male' ? <img src={Male} alt='Male' /> : <img src={Female} alt='Female' />}
                            </div>
                        </td>
                        <td>
                            <div className={s.name}>{row.firstName} {row.lastName}</div>
                            <div className={s.phone}>{row.phoneNumber}</div>
                        </td>
                        <td className={s.message}>{row.message}</td>
                        <td className={cn(s.rightCell, s.date)}>{row.time}</td>
                        <td className={s.date}>{row.date}</td>
                    </tr>
                ))
            }
        </>
    )
}