import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import Task_column from './components/Task_Column';
import { useEffect, useState } from 'react';
import data from './data';
const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks);


function App() {
  const [tasks,setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(()=>{
     localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) =>{
    const newTasks= tasks.filter((task,index)=> index !== taskIndex)
    setTasks(newTasks)
  }
  
  return (
    <div >
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
      {data.map((item, index)=>{
        return(
          <Task_column title={item.Category} tasks={tasks} status={item.Category} handleDelete={handleDelete} />

        )
      })}
      </main>
        
    </div>
  );
}

export default App;
