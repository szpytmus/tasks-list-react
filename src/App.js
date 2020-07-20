import React, {useState} from 'react';
import Form from "./Form"
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section"
import Header from "./Header"
import Container from "./Container"


const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść obiad", done: true }
];

const hideDone = false;

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone( hideDone => !hideDone);
  };


  return (
      <Container>
        
        <Header title="Tasks List"/>

        <Section 
        title="Add new task"
         body={<Form/>}
        />

      <Section 
        title="Tasks List"
        body={
        <Tasks 
        tasks={tasks} 
        hideDone={hideDone} />
      }
        extraHeaderContent = {
        <Buttons 
        tasks={tasks} 
        hideDone={hideDone} 
        toggleHideDone={toggleHideDone} />
      }
        />
        
    </Container>
    
  );
}

export default App;
