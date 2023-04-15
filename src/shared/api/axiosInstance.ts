import axios from 'axios'
import { API_URL } from './constants'

export const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})
