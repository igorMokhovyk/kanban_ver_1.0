import React, {useState} from 'react';
import './App.css';
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css';


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


function App() {


  const [task, setTask] = useState(taskList);


  return (


    <div className="container">
      <div className="row">
      {columnArray.map(el => <Column column={el}
      task={task}/>)}
      </div>
    </div>
  );
}

export default App;
