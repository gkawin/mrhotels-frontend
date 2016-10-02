import { BACKEND_API_SERVER } from './constants'

import RestClient from 'axios'

export class Backend {
  authenticate ({ email, password }) {
    const targetApi = `${BACKEND_API_SERVER}/api/v1/auth`
    return async () => {
      const response = await RestClient.post(targetApi, {
        email,
        password
      })
      return response.data
    }
  }

  getStarter ({ accessToken, username }) {
    const targetApi = `${BACKEND_API_SERVER}/api/v1/starter`
    return async () => {
      const response = await RestClient.post(targetApi, {
        accessToken,
        username
      })
      return response.data
    }
  }
}
