



const AssignTask = ({text}) => {
    return(
        <div className="assigntask">
                <div className="assigntask_icon">

                </div>
                <div className="assigntask_text">
                    {text}
                </div>
                <div className="assigntask_button">
                    <button className="assigntask_button_icon icon-green">
                        <i className="fa-solid fa-pencil "></i>
                    </button>
                    <button className="assigntask_button_icon">
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </div>
        </div>
    )
}


export default AssignTask;