/**
 * 课程课时相关请求模块
 */

import request from '@/utils/request'

const getAdevrtList = () => {
  return request({
    method: 'GET',
    url: '/front/ad/getAdList',
  })
}

const getAdevrtSpaceAll = () => {
  return request({
    method: 'GET',
    url: '/front/ad/space/getAllSpaces',
  })
}

const updateStatus = (params: any) => {
  return request({
    method: 'GET',
    url: '/front/ad/getAdById',
    params
  })
}

const getAdById = (params: any) => {
  return request({
    method: 'GET',
    url: '/front/ad/updateStatus',
    params
  })
}



export  {
  getAdevrtList,
  getAdevrtSpaceAll,
  updateStatus,
  getAdById
}
