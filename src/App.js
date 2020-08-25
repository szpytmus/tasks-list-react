import React, { useState } from 'react';
import Form from "./Form"
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section"
import Header from "./Header"
import Container from "./Container"
import { useTasks } from './useTasks.js'


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const { 
    tasks,
    addNewTask, 
    setAllDone, 
    toggleTaskDone,  
    removeTask,
  } = useTasks();


  return (
    <Container>

      <Header title="Tasks List" />

      <Section
        title="Add new task"
        body={<Form
          addNewTask={addNewTask}
        />}
      />

      <Section
        title="Tasks List"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone} />
        }
      />

    </Container>

  );
}

export default App;
