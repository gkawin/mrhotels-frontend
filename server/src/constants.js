
const isDevelopment = process.env.NODE_ENV === 'development'

export const BACKEND_API_SERVER = (
  isDevelopment
    ? 'http://localhost:30001'
    : 'http://backend-api.mrhotels.co:2101'
)
