import axios from "axios";
import { urlBackend } from '../../App'


const userActions = {
    SignUpUser: (user) => {
        const userData = {
            fullName: user.firstName + " " + user.lastName,
            email: user.email,
            password: user.password,
            from: user.from,
            aplication: "doctors"
        }

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
            console.log("data de usuario", user)

            if (user.data.success) {
                localStorage.setItem("tokenSession", user.data.response.tokenUser)
                dispatch({ type: 'user', payload: user.data.response.dataUser });
            }
            console.log(user)
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
    verifyTokenSession: (token) => {
        return async (dispatch, getState) => {
            await axios.get(
                'http://localhost:5000/users/auth/verifyTokenSession'
                , {
                    headers: { "Authorization": "Bearer " + token }
                }).then((user) => {
                    if (user.data.success) {
                        dispatch({ type: "user", payload: user.data.reponse })
                        dispatch({
                            type: "message",
                            payload: {
                                view: true,
                                message: user.data.message,
                                success: user.data.success
                            }
                        })
                    }
                }).catch((error) => {
                    if (error.response.status === 401) {
                        dispatch({
                            type: "message",
                            payload: {
                                view: true,
                                message: "Please sign in again",
                                success: false
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
    VerificarToken: (token) => {
        return async (dispatch, getState) => {
            await axios.get(`${urlBackend}/api/auth/signInToken`, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
                .then(user => {
                    if (user.data.success) {
                        dispatch({ type: "user", payload: user.data.response })
                        dispatch({
                            type: "message",
                            payload: {
                                view: true,
                                message: user.data.message,
                                success: user.data.success
                            }
                        })
                    } else {
                        localStorage.removeItem("token")
                    }
                }).catch(error => {
                    console.log(error)
                    if (error.reponse.status === 401) {
                        dispatch({
                            type: "message",
                            payload: {
                                view: true,
                                message: "Please do sing in again",
                                success: false
                            }
                        })
                        localStorage.removeItem("token")
                    }
                })
        }
    }
}

export default userActions;