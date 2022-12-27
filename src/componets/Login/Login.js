import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from '../input';
import { login } from '../../store/user';
import { useDispatch } from 'react-redux'
import "./Login.CSS";
// import "./StudentList.css";

const schema = yup.object({
    UserName: yup.string().required("שדה חובה"),
    Password: yup.string().required("שדה חובה"),
}).required();

//https://react-hook-form.com/get-started/
function LoginCom() {
    const dispatch = useDispatch();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

 

    const send = (data) => {
        dispatch(login(data));
    }
    return (
        <Fragment>
            <h1>כניסה</h1>
            <form onSubmit={handleSubmit(send)}>
                <Input
                    type="text"
                    register={register}
                    label={"שם משתמש או מייל"}
                    errors={errors}
                    name="UserName" />
                <Input
                    type="password"
                    register={register}
                    label={"סיסמה"}
                    errors={errors}
                    name="Password" />
                <input type="submit" value="כניסה" />
            </form>
        </Fragment>
    )
}


export default LoginCom;