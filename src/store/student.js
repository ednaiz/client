import axios from 'axios';

export const addStudentPost = (data) => {
    return axios.post('lo/api/user', data)
}

export const GetStudent = () => {
    return axios.get('lo/api/user')
}