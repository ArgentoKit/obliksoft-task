import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Datable from './components/Table/Datable'
import s from './App.module.scss'
import { search } from './common/search'
import Cancel from './icons/cancel.svg'
import Preloader from './icons/preloader.svg'

const App = () => {
  const [readMessages, setReadMessages] = useState([])
  const [unreadMessages, setUnreadMessages] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3006/messages')
      .then(res => {
        return (
          setReadMessages(res.data.filter(person => person.read === true).sort((a, b) => {
            return (
              new Date(b.date) > new Date(a.date) ? -1 :
                new Date(b.date) < new Date(a.date) ? 1 :
                  b.time > a.time ? -1 : 0
            )
          })),
          setUnreadMessages(res.data.filter(person => person.read === false).sort((a, b) => {
            return (
              new Date(b.date) > new Date(a.date) ? -1 :
                new Date(b.date) < new Date(a.date) ? 1 :
                  b.time > a.time ? -1 : 0
            )
          }))
        )
      })
      .catch(err => console.log(err))

  }, [readMessages.length])

  return (
    <div className={s.app}>
      <div className={s.inputBox}>
        <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
        <div className={s.clear}>
          <img src={Cancel} alt='Очистить' onClick={e => setQuery('')} />
        </div>
      </div>
      {console.log(readMessages[0])}
      {readMessages[0] == undefined ? <img src={Preloader} alt='Загрузка данных'/>
      : <Datable  readMessages={search(readMessages, query)}
                  setReadMessages={setReadMessages}
                  unreadMessages={search(unreadMessages, query)}
                  setUnreadMessage={setUnreadMessages}
    />}
    </div>
  )
}

export default App;