import { requestService } from './request'
import * as ApiUrls from './apiUrl'

export const commonService = (request) => {
  let reqObj = {
    method: request.method,
    url: request.url
  }
  if (request.data) {
    reqObj = Object.assign(reqObj, { data: request.data })
  }
  if (request.queryParams) {
    reqObj = Object.assign(reqObj, { queryParams: request.queryParams })
  }
  return requestService(reqObj)
    .then(response => {
      return response
    }).catch(error => {
      return Promise.reject(error)
    })
}

export const getUserListService = (pageNum) => {
  return commonService({
    method: 'GET',
    url: ApiUrls.GET_USER_LIST_ENDPOINT,
    queryParams: {
      page: pageNum
    }
  })
}

export const getUserDetail = (id) => {
  return commonService({
    method: 'GET',
    url: `${ApiUrls.GET_USER_LIST_ENDPOINT}/${id}`
  })
}
