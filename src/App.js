import React from 'react';
import { 
    HashRouter, 
    Switch, 
    Route, 
    Redirect
 } from 'react-router-dom';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from './features/author/AuthorPage';
import { toTasks, toAuthor, toTask } from './routes';
import Navigation from './Navigation';


export default () => (
    <HashRouter>
        <Navigation />
            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage/>
                </Route>
                <Route>
                    <Redirect to={toTasks()}/>
                </Route>
            </Switch>
    </HashRouter>
);