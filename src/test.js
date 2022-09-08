import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Input = ({ label, register, name, errors }) => (
    <div>
        <label>{label}</label>
        <input {...register(name)} />
        <p>{errors[name]?.message}</p>
    </div>
);


const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number("גיל במספר").positive("גיל חייב להיות מספר גדול מ-0").integer("נא להכניס מספר שלם").required(),
}).required();




export default function App() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input errors={errors} register={register} label="שם פרטי" name="firstName" />
            <Input errors={errors} register={register} label="גיל" name="age" />
            <input type="submit"  value="שליחה"/>
        </form>
    );
}