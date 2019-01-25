import axios from 'axios'

const baseUrl = 'http://localhost:3001/temperatures'

const getTemp = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const setTemp = async (temp) => {
    const response = await axios.put(baseUrl, { temperature : temp })
    return response.data
}

export { getTemp, setTemp }