import React from 'react';
import Form from "./Form"
import TaskList from "./TaskList"
import Buttons from "./Buttons"
import Section from "../../common/Section"
import Header from "../../common/Header"
import Container from "../../common/Container"
import { useTasks } from '../../useTasks.js'



function Tasks() {

  const { 
    //tasks,
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
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone} />
        }
      />

    </Container>

  );
}

export default Tasks;
