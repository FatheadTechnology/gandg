import axios from 'axios'

const apiURL = "http://localhost:3000"
// const apiURL = "https://ew-fake-api.herokuapp.com"

export const deleteTask = (taskId) => {
  return axios.delete(`${apiURL}/tasks/${taskId}`)
}

export const storeTask = (payload) => {
  return axios.post(`${apiURL}/tasks`, payload)
}

export const getTasks = () => {
  return axios.get(`${apiURL}/tasks`)
}

export const getPatternInfo = (patternName) => {
    return axios.get(`${apiURL}/patterns?name=`+patternName)
}

export const getRoom = (room) => {
  console.log('room', room)
  console.log('getRoom api')
  return axios.get(`${apiURL}/rooms?name=`+room)
}

export const getMaterials = () => {
  return axios.get(`http://localhost:3000/materials`)
}

export const getFavorites = () => {
    return axios.get(`${apiURL}/favorites`)
}

export const postFavorite = (pattern) => {
    return axios.post(`${apiURL}/favorites`, pattern)
}
export const postToCart = (pattern) => {
    return axios.post(`${apiURL}/cart`, pattern)
}

export const updateCart = (pattern) => {
    return axios.patch(`${apiURL}/cart/`+pattern.id, pattern)
}

export const removeFromCart = (pattern) => {
  console.log('remove from cart -', `${apiURL}/cart/${pattern.id}`)
  return axios.delete(`${apiURL}/cart/${pattern.id}`)
}

export const getCart = () => {
    return axios.get(`${apiURL}/cart`)
}

export const getFilteredPatterns = (params) => {
  console.log('params = ' + params)
    return axios.get(`${apiURL}/patterns`+params)
}

export const getArtists = () => {
    return axios.get(`${apiURL}/artists`)
}

export const getPageArtist = (params) => {
  return axios.get(`${apiURL}/artists`+params)
}