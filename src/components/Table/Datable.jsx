import React from 'react'
import s from './Datable.module.scss'
import Male from '../../icons/male.svg'
import Female from '../../icons/female.svg'
import Refresh from '../../icons/refresh.svg'
import cn from 'classnames'


const Datable = ({ data }) => {
    return (
        <table className={s.table}>
            <thead className={s.header}>
                <img src={Refresh} alt='Обновить'/>
                <span>Найдено 8 клиентов</span>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td className={s.rightCell}>
                            <div className={cn({
                                [s.male]: row.sex === 'male',
                                [s.female]: row.sex === 'female',
                            }, s.gender)}>
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
                ))}
            </tbody>
        </table>
    )
}

export default Datable