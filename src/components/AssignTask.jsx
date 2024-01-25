



const AssignTask = ({groupId, text, handleDeleteTask}) => {
    //console.log(text)


    return(
        <div className="assigntask">
                <div className="assigntask_icon">

                </div>
                <div className="assigntask_text">
                    {text.title}
                </div>
                <div className="assigntask_button">
                    <button onClick={(e) => handleDeleteTask(e, groupId, text.id)} className="assigntask_button_icon">
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </div>
        </div>
    )
}


export default AssignTask;