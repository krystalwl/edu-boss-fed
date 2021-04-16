/**
 * 课程课时相关请求模块
 */

import request from '@/utils/request';

export const getAdevrtList = () => {
  return request({
    method: 'GET',
    url: '/front/ad/getAdList',
  })
}
