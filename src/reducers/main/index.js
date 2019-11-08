import _ from 'lodash'

import * as ActionTypes from '../../utils/actionType'

const initialState = {
  isLoading: false,
  usersList: [],
  selectedUser: null,
  currentPageNum: 1,
  totalSize: 0
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  switch (action.type) {
    case ActionTypes.API_LOADING:
      newState.isLoading = true
      return newState

    case ActionTypes.SUCCESS_GET_USERS_LIST:
      newState.usersList = action.payload.data
      newState.currentPageNum = action.payload.page
      newState.totalSize = action.payload.total
      newState.isLoading = false
      return newState

    case ActionTypes.FAILED_GET_USERS_LIST:
      newState.isLoading = false
      return newState

    case ActionTypes.ON_SELECT_USER:
      newState.selectedUser = action.payload
      return newState

    case ActionTypes.ON_CHANGE_PAGE_NUM:
      newState.currentPageNum = action.payload
      return newState

    case ActionTypes.SUCCESS_GET_USER_DETAIL:
      newState.selectedUser = action.payload
      newState.isLoading = false
      return newState

    case ActionTypes.FAILED_GET_USER_DETAIL:
      newState.isLoading = false
      return newState

    default:
      return state
  }
}

export default reducer
