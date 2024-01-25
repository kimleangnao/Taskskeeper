

import { useState } from "react";
import logo from "../resources/logo.png";
import EventTask from "./components/EventTask";
import EventsInput from "./components/EventsInput";

const Events = () => {
    //this need to be change, information that return from the API will have to be sanitize to only title only
    const [tasks, setTasks] = useState([
        "Workout / Running Laps",     
        "Think of your goal today",
        "Start your tasks",
        "Get some lunch to refill",
        "Start your tasks again",
        "Review what you've done today",
        "Get some dinner, pat yourself in the back for what you've done",
        "End your day with something you wanted to do but didn't"
    ]);

    const [newTask, setnewTask] = useState({title: "", description: ""});
    
    const handleOnChangeInputTitle = (e) => {
        e.preventDefault();
        //console.log(e.target.value)
        let currentTask = {...newTask};
        currentTask.title = e.target.value;
        setnewTask(currentTask);
    }

    const handleOnChangeDescription = (e) => {
        e.preventDefault();
        //console.log(e.target.value)
        let currentTask = {...newTask};
        currentTask.description = e.target.value;
        setnewTask(currentTask);
    }

    //this need to be change, to send info to the back end and also keep change in the front end when API give "OKAY" back
    const onSubmit = (e) => {
        e.preventDefault();
       
        let currentTasks = [...tasks];
        let currentNewTask = {...newTask};

        currentTasks.push(currentNewTask.title);

        //reset
        currentNewTask.title = "";
        currentNewTask.description = "";

        setTasks(currentTasks);
        setnewTask(currentNewTask);
    }

    //this need to be change, to handle ID and remove object using ID instead of text title
    const onHandleDelete = (e, value) => {
        e.preventDefault();
        let currentTask = [...tasks];
        let filteredArray = currentTask.filter((v) => v != value);
        setTasks(filteredArray);
    }

    return(
        <div className="events">
            <div className="home_logo">
                <img src={logo} alt="not found" className="home_logo_img" />
            </div>

            <div className="events_wrapper">
                <div className="events_wrapper_tasks">
                    <div title="T/E/A = Tasks / Events / Activities" className="events_wrapper_tasks_header">
                        T/E/A
                    </div>
                    <div className="events_wrapper_tasks_group">
                        {
                            tasks.map((v, i) =>  <EventTask onHandleDelete={onHandleDelete} key={i} text={v} />)
                        }
                    </div>
                </div>
                
                <EventsInput 
                    inputValue={newTask.title} 
                    textareaValue={newTask.description} 
                    onSubmit={onSubmit} 
                    onChangeInputTitle={handleOnChangeInputTitle} 
                    onChangeTextarea={handleOnChangeDescription} 
                />
            </div>

        </div>
    )
}

export default Events;