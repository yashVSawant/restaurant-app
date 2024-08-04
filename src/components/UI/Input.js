import React from "react";

// import Classes from './Input.module.css';

const Input = (props)=>{
    return (
        <div>
            <lable htmlFor={props.input.id}>{props.lable}</lable>
            <input {...props.input}/>
        </div>
    )
}

export default Input;