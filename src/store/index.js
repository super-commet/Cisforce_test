/**
 * @module configureStore
 */
import configureStore from './configureStore'

/**
 * @module initialStore
 */
import initialStore from './initialStore'

/**
 * @module { Store }
 */
const store = configureStore(initialStore)

export default store
