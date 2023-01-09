import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from '../input';
import { Fragment } from 'react';
import { AddCourse } from '../../store/student';


const schema = yup.object({
    id: yup.string().required("שדה חובה"),
    Name: yup.string().required("שדה חובה"),
    LessonNum: yup.string().email('כתובת מייל לא תקין').required("שדה חובה"),
    lecturer: yup.string().required("שדה חובה"),

}).required();

const AddCourse = ({ setCourse, cancel }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const AddCourse = (data) => {
        console.log(data)
        AddCoursePost(data)
            .then(x => setCourse(x.data))
            .catch(err => setCourse(data))

    }


    return (
        <Fragment>
            <button onClick={cancel}>ביטול</button>
            <form onSubmit={handleSubmit(AddCourse)}>
                <Input
                    type="id"
                    register={register}
                    label={" מספר קורס"}
                    errors={errors}
                    name="id" />
                <Input
                    type="text"
                    register={register}
                    label={"שם קורס"}
                    errors={errors}
                    name="Name" />
                <Input
                    type="number"
                    register={register}
                    label={"מספר שיעורים"}
                    errors={errors}
                    name="LessonNum" />
                <Input
                    type="text"
                    register={register}
                    label={"מרצה"}
                    errors={errors}
                    name="Lecturer" />
                <input type="submit" value="הוספה"/>
            </form>
        </Fragment>
    )
}
export default AddCourse;