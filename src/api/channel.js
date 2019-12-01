import request from '@/utils/request'

export function bindChannel(data) {
  return request({
    url: '/channel/bind',
    method: 'post',
    params: data
  })
}
