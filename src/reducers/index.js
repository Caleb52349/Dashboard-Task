import{combineReducers} from 'redux';
import usersReducers  from "./reducer";
//Combined reducers from usersReducers
const reducers = combineReducers({
    data: usersReducers,
});

export default reducers;