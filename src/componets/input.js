
const Input = ({ label, name, register, type, errors, disabled, value, dirtyFields, className, labelClassName="p-title" }) => {

    return (
        <span>
            <label className={labelClassName} htmlFor={name}>{label}</label>
            <input 
                className= {`${className} ${dirtyFields&&dirtyFields[name]? "dirtyFields":""}`}
                type={type} 
                {...register(name)} 
                id={name} 
                disabled={disabled} 
                value={value}
                />
            {errors ? <div style={{ color: "red" }}>{errors[name] ? errors[name].message : null}</div> : null}
        </span>
    )
};
export default Input;