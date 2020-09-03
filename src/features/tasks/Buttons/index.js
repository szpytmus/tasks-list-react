import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Button} from './styled'
import { selectTasks, toggleHideDone } from '../tasksSlice';

const Buttons = ({setAllDone }) => {
    const {tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            {tasks.length > 0 && (
                <React.Fragment>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Show" : "Hide"} Done
                </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={setAllDone}>
                        All tasks done!
                </Button>
                </React.Fragment>
            )}
        </Wrapper>
    );
};

export default Buttons;