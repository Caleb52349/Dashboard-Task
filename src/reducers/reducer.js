import * as type from "../action/actionType";
const initialState={
    users:[],
    user:[],
    loading:true,
    
};

//Reducer with case of action type to return state 
const usersReducers = (state = initialState, action) =>{
    switch(action.type){
        case  type.GET_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false,
                
            };
            case type.DELETE_USER:
            case type.ADD_USER:
            case type.UPDATE_USER:
                return{
                    ...state,
                    loading:false,
                };
            case type.EDIT_USER:
                return{
                    ...state,
                    user:action.payload,
                    loading:false,
                }
            default:
                return state;
    }
};

export default usersReducers;