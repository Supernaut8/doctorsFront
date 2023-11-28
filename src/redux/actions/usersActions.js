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
    SignInUser: (logedUser) => {
    
        return async (dispatch, getState) => {

            const user = await axios.post(`${urlBackend}/api/users/auth/signIn`, { logedUser })
            if (user.data.success) {
                localStorage.setItem("tokenSession",user.data.response.tokenUser)
        
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
    VerifyTokenSession:(tokenSession)=>{
        return async (dispatch,getstate)=>{
            await axios.get(`${urlBackend}/api/users/auth/verifyToken`,
            {headers:{"Authorization": "Bearer " + tokenSession}
            }).then(user=>{
                console.log(user)
                if(user.data.success){
                    dispatch({type:"user",payload:user.data.response})
                    dispatch({
                        type:"message",
                        payload:{
                            view:true,
                            message:user.data.message,
                            success:user.data.success                        
                        }
                    })
                }else{
                    localStorage.removeItem("tokenSession")

                }
            }).catch(error=>{
                if(error.response.status===401){
                    dispatch({
                        type:"message",
                        payload:{
                            view:true,
                            message:"Session expired, please again signIn",
                            success:false
                        }
                    })
                    localStorage.removeItem("tokenSession")
                }
            })
        }
        
    },
    SignOutUser: (closeUser) => {

        return async (dispatch, getState) => {

            const user = await axios.post(`${urlBackend}/api/auth/signOut`, { closeUser })
            localStorage.removeItem('token')
            dispatch({ type: 'user', payload: null });
            return user
        }

    },
}

export default userActions;