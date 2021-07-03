import axios from 'axios'
import history from '../history'

export const signup = (value) => async dispatch => {
    await axios.post('/api/users/signup', value)
    .then(res => 
        dispatch({
            type: 'SIGN_UP',
            payload: {
                message : "Success"
            }
        })
    )
    .catch(err => {
        console.log(err.message)
        console.log("Daci")
        dispatch({
            type: 'SIGN_UP_ERROR',
            payload: {
                message : "Email Password Have Problem"
            }
        })
    })
}

export const clearMessage = () => dispatch => {
    dispatch({
         type: 'SIGN_UP_ERROR',
         payload: {
            message : ""
        }
     })
     history.push('/login');
}

export const login = (value) => async dispatch => {
    await axios.post('/api/users/login', value)
    .then(res => 
        dispatch({
            type: 'LOGIN',
            payload: res.data
        })
    )
    .catch(err => {
        console.log(err)
        dispatch({
            type: 'LOGIN_ERROR',
            payload: {
                message : "Email and Password Not Match"
            }
        })
    })
}

export const logout = () => dispatch => {
    dispatch({
         type: 'LOGOUT',
         payload: ""
     })
     history.push('/');
}