


const EventsInput = ({inputValue, textareaValue, onSubmit, onChangeInputTitle, onChangeTextarea}) => {



    return(

        <form className="events_wrapper_new">
            <div className="events_wrapper_new_header">
                New Task
            </div>
            <div className="events_wrapper_new_text">
                Title
            </div>
            <input value={inputValue} onChange={(e) => onChangeInputTitle(e)} type="text" className="events_wrapper_new_input" placeholder="Give it an interesting title" />
            
            <div className="events_wrapper_new_text">
                Description
            </div>
            <textarea value={textareaValue} onChange={(e) => onChangeTextarea(e)} className="events_wrapper_new_textarea" placeholder="Give it an interesting title" >
            
            </textarea>
            <button onClick={(e) => onSubmit(e)} className="events_wrapper_new_button">
                CREATE
            </button>
        </form>
    )
}

export default EventsInput;