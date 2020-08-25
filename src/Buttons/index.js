import React from 'react';
import { Wrapper, Button} from './styled'

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (


    <Wrapper>
        {tasks.length > 0 && (
            <React.Fragment>
                <Button onClick={toggleHideDone}>
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

export default Buttons;