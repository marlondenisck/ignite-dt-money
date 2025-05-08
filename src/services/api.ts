import axios from 'axios'

const API_URL = 'http://localhost:3333/'

export const api = axios.create({
  baseURL: API_URL
})
// Intercepta todas as respostas da API
api.interceptors.response.use(async (response) => {
  // Aguarda 1.5 segundos antes de retornar a resposta
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return response
})
