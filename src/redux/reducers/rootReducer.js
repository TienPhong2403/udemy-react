import { combineReducers } from 'redux'

import userReduce from './userReducer'

const rootReducer = combineReducers({
    user: userReduce,
});

export default rootReducer;