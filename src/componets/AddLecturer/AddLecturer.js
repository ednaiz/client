import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from '../input';
import { Fragment } from 'react';
import { AddLecturer } from '../../store/student';


const schema = yup.object({
    Id: yup.string().required("שדה חובה"),
    FName: yup.string().required("שדה חובה"),
    LName: yup.string().required("שדה חובה"),
    UserName: yup.string().required("שדה חובה"),
    Password: yup.string().required("שדה חובה"),
    Email: yup.string().email('כתובת מייל לא תקין').required("שדה חובה"),
    Phone: yup.string().required("שדה חובה"),

}).required();

const AddLecturer = ({ setLecturer, cancel }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const AddLecturer = (data) => {
        console.log(data)
        AddLecturerPost(data)
            .then(x => setLecturer(x.data))
            .catch(err => setLecturer(data))

    }


    return (
        <Fragment>
            <button onClick={cancel}>ביטול</button>
            <form onSubmit={handleSubmit(AddLecturer)}>
                <Input
                    type="id"
                    register={register}
                    label={" מספר קורס"}
                    errors={errors}
                    name="id" />
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
                <input type="submit" value="הוספה"/>
            </form>
        </Fragment>
    )
}
export default AddLecturer;