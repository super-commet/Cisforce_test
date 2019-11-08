import { combineReducers } from 'redux'

import main from './main'

const RootReducer = combineReducers({
  main: main
})

export default RootReducer
