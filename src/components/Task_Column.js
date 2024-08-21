import React from "react";
import "./Task_Column.css";
import TaskCard from "./TaskCard";

function Task_column(props){
    const{title,tasks,status,handleDelete} = props
    console.log(props.tasks,"PROPS");
    
    return(
        
        <section className='task_column'>
        <h2 className="task_column_heading"> {props.title}</h2>
        {
            tasks.map((task,index)=>task.status === status && <TaskCard key={index} title={task.task} handleDelete={handleDelete} index={index}/>

            )
        }
        </section>
        
        
    )
}
export default Task_column;