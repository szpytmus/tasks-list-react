import React, { useState, useRef } from "react";
import {StyledForm, Input, Button} from './styled';

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
        focusInput();
    };


    return ((
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                ref={inputRef}
                placeholder="Anything to do?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                />
            <Button
                onClick={focusInput}
            >
                Add task
            </Button>
        </StyledForm>
    ))
};

export default Form;