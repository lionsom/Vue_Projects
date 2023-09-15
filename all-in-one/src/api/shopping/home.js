import request from '@/utils/shopping-request'

export const getHomeData = () => {
  return request.get('/page/detail', {
    params: 0
  })
}
