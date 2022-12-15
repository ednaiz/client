import axios from 'axios'
import * as actionType from './action';

export const login = (data) => {
    return dispatchEvent =>
        axios.post(`https://localhost:44340/api/user/login`, data)
            .then(x => dispatchEvent(loginDispatch(x.data)))
            .catch(() => {
                alert('שגיאה בהעלאת מידע')
            })
}

export const loginDispatch = (user) => {
    return ({ type: actionType.LOGIN, user })
}

export const Sighin = (data) => {
    console.log(data,"sssssssssssssssssssss")
    return dispatchEvent =>
        axios.post('https://localhost:44340/api/user', data)
            .then(x => dispatchEvent(loginDispatch(x.data)))
                .catch(err => {
                    console.log(err, data)
                    alert('שגיאה בהעלאת מידע')
                })
}