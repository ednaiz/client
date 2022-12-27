import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from '../input';
import { Fragment } from 'react';
import { addStudentPost } from '../../store/student';


const schema = yup.object({
    FName: yup.string().required("שדה חובה"),
    LName: yup.string().required("שדה חובה"),
    Email: yup.string().email('כתובת מייל לא תקין').required("שדה חובה"),
    Phone: yup.string().required("שדה חובה"),

}).required();

const AddStudent = ({ setStudent, cancel }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const addStudent = (data) => {
        console.log(data)
        addStudentPost(data)
            .then(x => setStudent(x.data))
            .catch(err => setStudent(data))

    }


    return (
        <Fragment>
            <button onClick={cancel}>ביטול</button>
            <form onSubmit={handleSubmit(addStudent)}>
                <Input
                    type="text"
                    register={register}
                    label={"שם משתמש"}
                    errors={errors}
                    name="FName" />
                <Input
                    type="text"
                    register={register}
                    label={"שם משפחה"}
                    errors={errors}
                    name="LName" />
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
export default AddStudent;