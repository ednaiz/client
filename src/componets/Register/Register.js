import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from '../input';
import { Register } from '../../store/user';
import { useDispatch } from 'react-redux'
import "./Register.CSS";
// import "./StudentList.css";

const schema = yup.object({
    FName: yup.string().required("שדה חובה"),
    LName: yup.string().required("שדה חובה"),
    UserName: yup.string().required("שדה חובה"),
    Password: yup.string().required("שדה חובה"),
    Email: yup.string().email('כתובת מייל לא תקין').required("שדה חובה"),
    Phone: yup.string().required("שדה חובה"),
}).required();

//https://react-hook-form.com/get-started/
function Register() {
    const dispatch = useDispatch();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

 

    const send = (data) => {
        dispatch(register(data));
    }
    return (
        <Fragment>
            <h1>כניסה</h1>
            <form onSubmit={handleSubmit(send)}>
                
               <Input 
                    type="text"
                    register={register}
                    label={"שם פרטי"}
                    errors={errors}
                    name="FName" />
                <Input
                    type="text"
                    register={register}
                    label={"שם משפחה"}
                    errors={errors}
                    name="LName" />
                <Input
                    type="text"
                    register={register}
                    label={"שם משתמש"}
                    errors={errors}
                    name="UserName" />
                <Input
                    type="password"
                    register={register}
                    label={"סיסמה"}
                    errors={errors}
                    name="Password" />
                    <Input
                    type="email"
                    register={register}
                    label={"מייל"}
                    errors={errors}
                    name="Email" />
                <Input
                    type="text"
                    register={register}
                    label={"פלאפון"}
                    errors={errors}
                    name="Phone" />
                <input type="submit" value="כניסה" />
            </form>
        </Fragment>
    )
}


export default Register;