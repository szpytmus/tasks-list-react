import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Content, Button } from './styled';
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from '../../tasksSlice';
import { Link } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../QueryParameter";



const TaskList = () => {

  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  
  return (
    <List >
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={toTask({ id: task.id })}> 
            {task.content} </Link>
          </Content>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
           🗑
          </Button>
        </Item>))}
    </List>
  );
};

export default TaskList;