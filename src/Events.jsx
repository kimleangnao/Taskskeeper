

import { useState } from "react";
import logo from "../resources/logo.png";
import EventTask from "./components/EventTask";

const Events = () => {
    const [tasks] = useState([
        "Workout / Running Laps",
        "Shower / Breakfast",
        "Think of your goal today",
        "Start your tasks",
        "Take a break in between tasks",
        "Get some lunch to refill",
        "Loose yourself after some refill",
        "Start your tasks again",
        "Get some more break in",
        "Back to tasks",
        "Review what you've done today",
        "Get some dinner, pat yourself in the back for what you've done",
        "End your day with something you wanted to do but didn't"
    ]);
    


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
                            tasks.map((v, i) =>  <EventTask key={i} Text={v} />)
                        }
                    </div>
                </div>

                <div className="events_wrapper_new">
                    <div className="events_wrapper_new_header">
                        New Task
                    </div>
                    <div className="events_wrapper_new_text">
                        Title
                    </div>
                    <input type="text" className="events_wrapper_new_input" placeholder="Give it an interesting title" />
                    
                    <div className="events_wrapper_new_text">
                        Description
                    </div>
                    <textarea className="events_wrapper_new_textarea" placeholder="Give it an interesting title" >
                    
                    </textarea>
                    <button className="events_wrapper_new_button">
                        CREATE
                    </button>

                
                </div>
            </div>

        </div>
    )
}

export default Events;