
import { useState } from "react";
import AssignTask from "./components/AssignTask";
import AssignSelection from "./components/AssignSelection";


import logo from "../resources/logo.png";
import arrowDown from "../resources/arrowDown.png"
import createButton from "../resources/Createbutton.png"

const AssignTasks = () => {
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
        <div className="assign">
            <div className="home_logo">
                <img src={logo} alt="not found" className="home_logo_img" />
            </div>

            <div className="assign_header">
                <div className="assign_header_icons">
                    <div className="assign_header_icons_arrowDown">
                        <img src={arrowDown} alt="not found" className="assign_header_icons_arrowDown_image"/>
                    </div>
                </div>
                <div className="assign_header_days">
                    <div className="assign_header_days_square">
                        MON
                    </div>
                    <div className="assign_header_days_square">
                        TUE
                    </div>
                    <div className="assign_header_days_square">
                        WED
                    </div>
                    <div className="assign_header_days_square assign_header_days_square-active">
                        THU
                    </div>
                    <div className="assign_header_days_square">
                        FRI
                    </div>
                    <div className="assign_header_days_square">
                        SAT
                    </div>
                    <div className="assign_header_days_square">
                        SUN
                    </div>
                </div>
            </div>

            <div className="assign_wrapper">
                <div className="assign_wrapper_group">
                    <div className="assign_wrapper_group_header">
                        <div className="assign_wrapper_group_header_name">
                            New Group 1
                        </div>
                        <div className="assign_wrapper_group_header_icon">
                            <i className="fa-solid fa-check-double icon-size"></i>
                        </div>
                    </div>
                    <div className="assign_wrapper_group_body">
                        {
                            tasks.map((v, i) =>  <AssignTask key={i} text={v} />)
                        }

                        <div className="assign_wrapper_group_body_input">
                            <AssignSelection arrayText={tasks}/>
                        </div>
                    </div>
                </div>
                <div className="assign_wrapper_create">
                      <img src={createButton} alt="not found" className="assign_wrapper_create_image" />          
                </div>

            </div>

        </div>
    )
}

export default AssignTasks;