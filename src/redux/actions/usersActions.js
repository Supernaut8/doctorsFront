import axios from "axios";
import { urlBackend } from '../../App'
// import { Dispatch } from "react";

const userActions = {
    SignUpUser: (user) => {
        const userData= {
            fullName: user.firstName + " " + user.lastName,
            email: user.email,
            password: user.password,
            from: user.from,
            aplication: "doctors"
        }
        // console.log(userData)
        return async (dispatch, getState) => {

            const res = await axios.post(`${urlBackend}/api/users/auth/signUp`, { userData })
            console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,   
                    success: res.data.success                 
                }
            });

        }
    },
    SignInUser: (userData) => {
        return async (dispatch, getState) => {

            const user = await axios.post(`${urlBackend}/api/users/auth/signIn`, { userData })
            console.log(user)
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response.dataUser });
            }
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,      
                    success: user.data.success              
                }
            });
        }

    },
    // SignOutUser: (closeUser) => {

    //     return async (dispatch, getState) => {

    //         const user = await axios.post(`${urlBackend}/api/auth/signOut`, { closeUser })
    //         localStorage.removeItem('token')
    //         dispatch({ type: 'user', payload: null });
    //         return user
    //     }

    // },
    // VerificarToken: (token) => {
    //     return async (dispatch, getState) => {
    //         await axios.get(`${urlBackend}/api/auth/signInToken`, {
                
    //         })
    //     }
    // }
}

export default userActions;