import { useNavigate } from 'react-router';
import "./Register"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Sighin } from '../../store/user';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

const schema = yup.object({
    name: yup.string().required("שדה חובה"),
    password: yup.string().required('חובה להכניס סיסמה'),
    rePassword: yup.string().required("").oneOf([yup.ref('password'), null], 'סיסמה לא מתאימה'),
}).required();

const Register = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [mass, setMassege] = useState('')

    return (
        <>
            <h1>הרשמה</h1>
            <p>{mass}</p>
            <form onSubmit={handleSubmit((data) => dispatch(Sighin(data)))}>
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