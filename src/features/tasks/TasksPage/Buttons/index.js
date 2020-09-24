import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Button} from './styled'
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectIsEveryTaskDone, selectHideDone} from '../../tasksSlice';
import FetchExampleTasksButton from '../FetchExampleTasksButton';

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <FetchExampleTasksButton/>
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