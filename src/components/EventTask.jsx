



const EventTask = ({Text}) => {
    return(
        <div className="events_wrapper_tasks_group_componet">
            <div className="events_wrapper_tasks_group_componet_dot">
                <div className="events_wrapper_tasks_group_componet_dot_circle">
            
                </div>
            </div>
            <div className="events_wrapper_tasks_group_componet_text">
                {Text}
            </div>
            <div className="events_wrapper_tasks_group_componet_icons">
                <button className="events_wrapper_tasks_group_componet_icons_button icon-green">
                    <i className="fa-solid fa-pencil "></i>
                </button>
                <button className="events_wrapper_tasks_group_componet_icons_button">
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
}


export default EventTask;