import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Datable from './components/Table/Datable'
import s from './App.module.scss'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('./data.json').then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className={s.app}>
      <Datable data={data} />
    </div>
  )
}

export default App;
