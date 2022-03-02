import * as types from "./actionType";
import axios from "axios";
//axios to fetch data from json server in my case fake api with db.json

const getUsers =(users)=>({
    type: types.GET_USERS,
    payload:users,
});

//type of DELETE_USER to delete user
const userDelete = ()=>({
    type:types.DELETE_USER
})
//type of ADD_USER to add user
const userAdd = ()=>({
    type:types.ADD_USER,
})

//type of UPDATE_USER to update user
const userUpdate = ()=>({
    type:types.UPDATE_USER,
})

//type of EDIT_USER to edit user

const userEdit = (user)=>({
    type:types.EDIT_USER,
    payload:user,
})
//fetches api to retrieve data- load users
export const loadUsers = () =>{
    const devEnv = process.env.NODE_ENV !=="production";
    const {REACT_APP_API,REACT_APP_PROD_URL}=process.env;
return function(dispatch){
    axios.get(`${devEnv ? REACT_APP_API : REACT_APP_PROD_URL}`)
    .then((response) =>{
        console.log("response",response)
        dispatch(getUsers(response.data))
    }).catch(error => console.log(error));
}
}

//fetches api to retrieve data - delete user via id 
export const deleteUser = (id) =>{
    const devEnv = process.env.NODE_ENV !=="production";
    const {REACT_APP_API,REACT_APP_PROD_URL}=process.env;
    return function(dispatch){
        axios
        .delete(`${devEnv? REACT_APP_API:REACT_APP_PROD_URL}/${id}`)
        .then((response) =>{
            console.log("response",response)
            dispatch(userDelete());
            dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
    }

    //fetches api to retrieve data - delete user via user
    export const addUser = (user) =>{
    const devEnv = process.env.NODE_ENV !=="production";
    const {REACT_APP_API,REACT_APP_PROD_URL}=process.env;
        return function(dispatch){
            axios
            .post(`${devEnv?REACT_APP_API:REACT_APP_PROD_URL}`,user)
            .then((response) =>{
                console.log("response",response)
                dispatch(userAdd());
                dispatch(loadUsers());
            }).catch(error => console.log(error));
        }
        }
        //fetches api to retrieve data - edit User
        export const editUser = (id) =>{
            const devEnv = process.env.NODE_ENV !=="production";
    const {REACT_APP_API,REACT_APP_PROD_URL}=process.env;
            return function(dispatch){
                axios
                .get(`${devEnv?REACT_APP_API:REACT_APP_PROD_URL}/${id}`)
                .then((response) =>{
                    console.log("response",response)
                    dispatch(userEdit(response.data));
                    
                }).catch(error => console.log(error));
            }
            }

            //fetches api to retrieve data - Update user via id

            export const updateUser = (user,id) =>{
                const devEnv = process.env.NODE_ENV !=="production";
    const {REACT_APP_API,REACT_APP_PROD_URL}=process.env;
                return function(dispatch){
                    axios
                    .put(`${devEnv?REACT_APP_API:REACT_APP_PROD_URL}/${id}`,user)
                    .then((response) =>{
                        console.log("response",response)
                        dispatch(userUpdate());
                        
                    }).catch(error => console.log(error));
                }
                }