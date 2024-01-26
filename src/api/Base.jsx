import axios from 'axios'

const baseUrl = 'http://localhost:3001/pray'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPray = object => {
    const request = axios.post(baseUrl, object)
    return request.then(response => response.data)
}

const likeUpdate = (id, object) => {
    const request = axios.put(`${baseUrl}/${id}`, object)
    return request.then(response => response.data)
}

const priority = (id, object) => {
    const request = axios.put(`${baseUrl}/${id}`, object)
    return request.then(response => response.data)
}

const deletingPray = (id, object) => {
    const request = axios.delete(`${baseUrl}/${id}`,object)
    return request.then(response => response.data)
}

export default {
    getAll,
    createPray,
    likeUpdate,
    deletingPray,
    priority
}