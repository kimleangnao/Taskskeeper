


const LoadingTask = ({value, index, handleTaskClick}) => {
    return(
        <div className={value.doing == true ? "home_wrapper_list_background_actions_text_doing" : value.completed == true ? "home_wrapper_list_background_actions_text_done" : "home_wrapper_list_background_actions_text"}>
            <button onClick={(e) => handleTaskClick(e, index, value.id)} className={value.doing == true ? "home_wrapper_list_background_actions_text_icon icons icons_doing" : value.completed == true ? "home_wrapper_list_background_actions_text_icon icons_done" : "home_wrapper_list_background_actions_text_icon icons"}>
                <i className="fa-solid fa-check-double "></i>
            </button>
            <div className="home_wrapper_list_background_actions_text_value">
                {value.text}
            </div>
        </div>
    )
}


export default LoadingTask;