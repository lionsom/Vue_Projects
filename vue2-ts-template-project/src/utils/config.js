export const isDev = process.env.NODE_ENV === 'development'
export const rootURL = isDev ? 'http://localhost:3000/' : '' // for axios
