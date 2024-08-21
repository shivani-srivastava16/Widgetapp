import React, { useState } from "react"
import "./TaskForm.css" 
import data from "../data"
function TaskForm({setTasks}){
     const [taskData, setTaskData] = useState({task:"", status:"CSPM Executive Dashboard",});

     const handleChange = (e)=>{
        const {name,value} = e.target;
      

      setTaskData((prev) =>{
        return{ ...prev, [name]: value};
      });
     };
     const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(taskData);
        if (!taskData.task){
          alert("Enter your Widget")
        }
        else setTasks(prev=>{
            return [ ...prev, taskData]
        });
        setTaskData({task:"", 
            status:"CSPM Executive Dashboard",})

     }
     
     
   
    
    return(
        <header className='app_header'>
          <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={taskData.task} placeholder="Add widget" className="task_input" onChange={handleChange}></input>
            <select name="status" value={taskData.status} className="task_status" onChange={handleChange}> 
                {
                  data.map((item, index)=>{
                    return(
                      <option value={item.Category}>{item.Category}</option>

                    )
                  })
                }
              
            </select>
            <button type="submit" className="task_submit"> Add Widget</button>
            </form> 
            
             
    
        </header>
        
    )
}
export default TaskForm;