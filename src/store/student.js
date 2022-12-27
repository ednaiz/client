import axios from 'axios';

export const addStudentPost = (data) => {
    return axios.post('https://localhost:44340/api/user/post', data)
}

export const GetStudent = () => {
    return axios.get('https://localhost:44340/api/user')
}