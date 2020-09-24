import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExampleTasks, selectLoading } from '../../tasksSlice';


export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading());

    return (
        <button disabled={loading} noClick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                ? "Loading..."
                : "Show example tasks"
            }
        </button>
    )
}