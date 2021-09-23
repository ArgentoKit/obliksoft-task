import axios from "axios"
import { refreshData } from "./refreshData"

export const changeStateMessage = async (row, setReadMessages, setUnreadMessages) => {
    if (row.read === false) {
        row.read = true
    }

    await axios.put(`http://localhost:3006/messages/${row.id}`, row)
    refreshData(setReadMessages, setUnreadMessages)
}