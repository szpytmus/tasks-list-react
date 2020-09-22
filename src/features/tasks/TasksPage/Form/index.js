import React, { useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {StyledForm, Input, Button} from './styled';
import { addTask } from '../../tasksSlice';


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();

        if(newTaskContentTrimmed === ""){
            return;
        }

        dispatch(addTask({
            content: newTaskContentTrimmed,
            done: false,
            id: nanoid(),
        }));

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