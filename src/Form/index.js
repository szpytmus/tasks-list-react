import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();

        if(newTaskContentTrimmed === ""){
            return;
        }

        addNewTask(newTaskContentTrimmed);
        setNewTaskContent("");
    };


    return ((
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                ref={inputRef}
                className="form__input"
                placeholder="Anything to do?"
                
                onChange={({ target }) => setNewTaskContent(target.value)}
                />
            <button
                className="form__button"
                onClick={focusInput}
            >
                Add task
            </button>
        </form>
    ))
};

export default Form;