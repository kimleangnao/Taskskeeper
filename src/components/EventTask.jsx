



const EventTask = ({onHandleDelete, text}) => {
    return(
        <div className="events_wrapper_tasks_group_componet">
            <div className="events_wrapper_tasks_group_componet_dot">
                <div className="events_wrapper_tasks_group_componet_dot_circle">
            
                </div>
            </div>
            <div className="events_wrapper_tasks_group_componet_text">
                {text}
            </div>
            <div className="events_wrapper_tasks_group_componet_icons">  
                <button onClick={(e) => onHandleDelete(e, text)} className="events_wrapper_tasks_group_componet_icons_button">
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}


export default EventTask;