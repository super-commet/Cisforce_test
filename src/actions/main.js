import * as ActionTypes from '../utils/actionType'
import * as ApiServices from '../services/service'

export const apiLoading = () => ({ type: ActionTypes.API_LOADING })

export const getUserList = () => {
  return (dispatch, getState) => {
    const pageNum = getState().main.currentPageNum
    dispatch(apiLoading())
    return ApiServices.getUserListService(pageNum)
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_GET_USERS_LIST,
          payload: response.data
        })
      }).catch(error => {
        dispatch({
          type: ActionTypes.FAILED_GET_USERS_LIST,
          payload: error
        })
      })
  }
}

export const onSelectUser = (userDetail) => {
  return {
    type: ActionTypes.ON_SELECT_USER,
    payload: userDetail
  }
}

export const onChangePageNum = (pageNum) => {
  return {
    type: ActionTypes.ON_CHANGE_PAGE_NUM,
    payload: pageNum
  }
}
