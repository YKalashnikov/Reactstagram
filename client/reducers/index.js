import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // we need this for react-router
import posts from './posts';
import comments from './comments';

// Combine all our reducers togeher
const rootReducer = combineReducers({
   posts, 
   comments,
   routing: routerReducer });

export default rootReducer;
