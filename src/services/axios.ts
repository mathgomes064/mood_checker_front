import axios from 'axios'

export const api = axios.create({
//   baseURL: 'https://moodchecker.com',
  headers: {
    'Content-Type': 'application/json'
  }
})
