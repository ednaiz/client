import axios from 'axios'
import * as actionType from './action';
import swal from 'sweetalert';

export const login = (data) => {
    return dispatchEvent =>
        axios.post('httppppppp/login', data)
            .then(x => dispatchEvent({ type: actionType.LOGIN, user: x.data }))
            .catch(err => {
                console.log(err, data)
                alert('שגיאה בהעלאת מידע')
            })
}
export const Sighin = (data) => {
    return dispatchEvent =>
        axios.post('httppppppp/Sighin', data)
            .then(x => dispatchEvent({ type: actionType.LOGIN, user: x.data }))
            .catch(err => {
                console.log(err, data)
                alert('שגיאה בהעלאת מידע')
            })
}