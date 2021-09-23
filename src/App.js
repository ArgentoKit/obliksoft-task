import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Datable from './components/Table/Datable'
import s from './App.module.scss'
import { search } from './common/search'

const App = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios.get('./data.json').then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={s.app}>
      <div className={s.inputBox}>
        <input type='text' value={query} onChange={e => setQuery(e.target.value)}/>
      </div>
      <Datable data={search(data, query)} />
    </div>
  )
}

export default App;
