import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" placeholder="Anything to do?" autofocus />
        <button className="form__button">Add task</button>
    </form>
)

export default Form;