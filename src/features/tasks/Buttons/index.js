import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Button} from './styled'
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectIsEveryTaskDone, selectHideDone, fetchExampleTasks } from '../tasksSlice';

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Button onClick= { () =>  dispatch( fetchExampleTasks())}>
                Show exemplary Tasks
            </Button>
            {!areTasksEmpty && (
                <React.Fragment>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Show" : "Hide"} Done
                </Button>
                    <Button
                        disabled = {isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}>
                        All tasks done!
                </Button>
                </React.Fragment>
            )}
        </Wrapper>
    );
};

export default Buttons;