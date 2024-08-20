import request from '@/server/shopping-http'

export const getHomeData = () => {
  return request.get('/page/detail', {
    params: 0
  })
}
