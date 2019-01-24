import axios from 'axios'

const baseUrl = 'http://localhost:3001/lights'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const get = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const modify = async (id, on) => {
    const url = `${baseUrl}/${id}`
    const response = await axios.put(url, { ...on })
    return response.data
}

export { getAll, get, modify }