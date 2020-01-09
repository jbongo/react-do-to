import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ToDoList from './toDoList';
import AddTask from './addTask';
import NavBar from './navBar';



class App extends React.Component {

    render() {
        return (   
            <section id="todo">
                
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" component={AddTask}/>
                        <Route path="/:filter?" component={ToDoList}/>
                    </Switch>
                    <NavBar/>
                
                </BrowserRouter>
            </section>
        )
    }
}

export default App;