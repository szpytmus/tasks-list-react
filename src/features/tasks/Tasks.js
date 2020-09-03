import React, { useState } from 'react';
import Form from "./Form"
import TaskList from "./TaskList"
import Buttons from "./Buttons"
import Section from "../../common/Section"
import Header from "../../common/Header"
import Container from "../../common/Container"
import { useTasks } from '../../useTasks.js'


function Tasks() {
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
          <TaskList
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

export default Tasks;
