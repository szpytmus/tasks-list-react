import React from 'react';
import { HashRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from './features/author/AuthorPage';


export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/tasks"> Tasks</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/author"> About Author</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/tasks/:id">
                    <TaskPage />
                </Route>
                <Route path="/tasks">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <AuthorPage/>
                </Route>
                <Route path="/">
                    <Redirect to="/tasks"/>
                </Route>
                
            </Switch>
        </nav>
    
    </HashRouter>
);