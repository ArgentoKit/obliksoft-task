import React from 'react'
import s from './Datable.module.scss'
import Male from '../../icons/male.svg'


const Datable = ({ data }) => {
    return (
        <table>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>
                            <div className={s.gender}>
                                <img src={Male} alt='Male' />
                            </div>
                        </td>
                        <td>
                            <div>{row.firstName} {row.lastName}</div>
                            <div>{row.phoneNumber}</div>
                        </td>
                        <td>{row.message}</td>
                        <td>{row.time}</td>
                        <td>{row.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Datable