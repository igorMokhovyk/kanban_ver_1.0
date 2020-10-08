import React, {useState} from 'react';
import './App.css';
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css';


import AddNew from "./AddNew";
import NewStatus from "./NewStatus";


const taskList = [
    {id: Math.random(), name: 'First Task', status: 'todo'},
    {id: Math.random(), name: 'Second Task', status: 'progress'},
    {id: Math.random(), name: 'Third Task', status: 'review'},
    {id: Math.random(), name: 'Fifth Task', status: 'review'},
    {id: Math.random(), name: 'Six Task', status: 'done'},
    {id: Math.random(), name: 'Forth Task', status: 'done'}
];

const columnArray = [
    {id: Math.random(), title: 'To do', status: 'todo'},
    {id: Math.random(), title: 'Progress', status: 'progress'},
    {id: Math.random(), title: 'Review', status: 'review'},
    {id: Math.random(), title: 'Done', status: 'done'}
];


const statuses = ['todo', 'progress', 'review', 'done'];


function App() {


    const [tasks, setTask] = useState(taskList);
    const [column, setColumn] = useState(columnArray)


    const createStatuse = (inputStatuse) => {

        const newStatus = [...column, {id: Math.random(), title: inputStatuse, status: inputStatuse}];
        setColumn(newStatus);
        statuses.push(inputStatuse);
    }


    const createTask = (newName, newStatus) => {
        const newTask = [...tasks, {id: Math.random(), name: newName, status: newStatus}]
        setTask(newTask);
    }


    const changeTaskStatus = (taskId, direction) => {
        const newTask = tasks.map((el) => {
            if (el.id === taskId) {
                if (direction === 'right') {
                    el.status = statuses[statuses.indexOf(el.status) + 1]
                }
                if (direction === 'left') {
                    el.status = statuses[statuses.indexOf(el.status) - 1]
                }

            }
            return el;
        })
        setTask(newTask);
    }


    const buttonDelete = (id) => {
        const newTask = tasks.filter(el => el.id !== id);
        setTask(newTask)
    }


    return (

        <div className='App'>
            <div className="container">

                <AddNew createTask={createTask} column={column}/>
                <NewStatus createStatuse={createStatuse}/>
                <div className="row">

                    {column.map(el => <Column column={el}
                                              task={tasks} key={el.id}
                                              changeTaskStatus={changeTaskStatus}
                                              buttonDelete={buttonDelete}
                                              statuses={statuses}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default App;
