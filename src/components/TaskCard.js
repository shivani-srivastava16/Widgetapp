import React from "react";
import "./TaskCard.css";


function TaskCard({title,handleDelete,index}){
    return(
        <article className="task_card">
            <p className="task_text"> {title}</p>
            <div className="task_card_bottom_line">
            
                <button className="task_delete" onClick={()=>handleDelete(index)}>Remove</button>

            </div>
        </article>
    )
}
export default TaskCard;