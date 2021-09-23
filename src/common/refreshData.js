import axios from "axios"

export const refreshData = async (setReadMessages, setUnreadMessages) => {
    return (
        await axios.get('http://localhost:3006/messages')
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
    )
}