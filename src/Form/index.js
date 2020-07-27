import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed;
        
        if(newTaskContentTrimmed.trim() === ""){
            return;
        }

        addNewTask(newTaskContentTrimmed.trim());
        setNewTaskContent("");
    }


    return ((
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="Anything to do?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                />
            <button
                className="form__button">
                Add task
            </button>
        </form>
    ))
}

export default Form;