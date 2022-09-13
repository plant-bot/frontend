import axios from "axios"

const baseUrl = '/sensordata'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

export default { getAll }