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
    url: '/front/ad/updateStatus',
    params
  })
}

const getAdById = (params: any) => {
  return request({
    method: 'GET',
    url: '/front/ad/getAdById',
    params
  })
}

const saveOrUpdate = (promotionAdDTO: any) => {
  return request({
    method: 'POST',
    url: '/front/ad/saveOrUpdate',
    params: {...promotionAdDTO}
  })
}



export  {
  getAdevrtList,
  getAdevrtSpaceAll,
  updateStatus,
  getAdById,
  saveOrUpdate
  
}
