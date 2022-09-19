import { useNavigate } from 'react-router';
import "./Register"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useState } from 'react';

const schema = yup.object({
    name: yup.string().required("שדה חובה"),
    password: yup.string().required('חובה להכניס סיסמה'),
    rePassword: yup.string().required("").oneOf([yup.ref('password'), null], 'סיסמה לא מתאימה'),
}).required();

const Register = () => {


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    let nav = useNavigate();
  
    const [mass, setMassege] = useState('')
    const send = (data) => {
        console.log(data)
        axios.post('http://locallhost:568/api/customer', data).then(x => {

            nav("/homePage")
        }).catch(x => setMassege("לא הצלחנו להקים לקוח "))
    }
    return (
        <>
            <h1>הרשמה</h1>
            <p>{mass}</p>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" name="name" {...register('name')} />
                <label >שם משתמש</label>
                <br />
                <p>{errors['name']?.message}</p>
                <br />
                <input type="password" name="password" {...register('password')} /> <label >סיסמא</label>
                <br />
                <p>{errors['password']?.message}</p>
                <br />
                <input type="password" name="password"  {...register('rePassword')} /> <label >אימות סיסמא</label><br />
                <p>{errors['rePassword']?.message}</p>
                <br />
                <input type="number" name="phoneNumber" {...register('Phone')} /> <label>טלפון</label><br /><br />
                <input type="mail" name="email" {...register('Email')} /> <label>מייל</label><br /><br />
                <button type="submit"   >הירשם</button><br /><br />

            </form>
        </>
    )
}
export default Register;