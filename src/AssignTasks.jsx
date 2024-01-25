
import { useState } from "react";
import AssignTask from "./components/AssignTask";
import AssignSelection from "./components/AssignSelection";


import logo from "../resources/logo.png";
import arrowDown from "../resources/arrowDown.png"
import createButton from "../resources/Createbutton.png"

const AssignTasks = () => {
    //this need to be change when we have an backend API
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

    //this need to change to handle different group
    const [assignTasks, setassignTasks ] = useState(
        [
            {
                id: "00001",
                title: "New Group 1",
                active: false,
                tasks : [
                    {
                        id: "e_0000001",
                        title: "Workout / Running Laps",
                        description : "Wake up early and go run some laps around the block"
                    }
                ]
            },
            {
                id: "00001",
                title: "New Group 2",
                active: false,
                tasks : [
                    {
                        id: "e_0000001",
                        title: "Workout / Running Laps",
                        description : "Wake up early and go run some laps around the block"
                    }
                ]
            }
        ]
    );

    const [selection, setselection] = useState({index: "", title: ""});


    const onHandleSelection = (e, index) => {
        let currentSelection = {...selection};
        currentSelection.index = index;
        currentSelection.title = e.target.value;

        setselection(currentSelection);
    }

    const onHandleAdd = (e, index) => {
        e.preventDefault();
        let currentSelection = {...selection};
    

        let copyAssingTasks = [...assignTasks];

        let newObject =  {
            id: Math.floor(Math.random() * 1000000),
            title: currentSelection.title,
            description : "None provide"
        }

        if(index == currentSelection.index){
            copyAssingTasks[index].tasks.push(newObject);
        }
   
        setassignTasks(copyAssingTasks);

        //reset the selection to default value so user won't get confuse
        //
     
    }

    //handle delete task
    const handleDeleteTask = (e, groupId, id) => {
        e.preventDefault();
        let currentTask = [...assignTasks];
        let filteredArray = currentTask[groupId].tasks.filter((t) => t.id != id);
        currentTask[groupId].tasks = filteredArray;
    
       setassignTasks(currentTask);
    }


    //create new group
    const createNewGroup = (e) => {
        e.preventDefault();

        let currentTask = [...assignTasks]

        let randomName = "New Group " + (currentTask.length + 1);
        let newGroup =  {
            id: Math.floor(Math.random()* 1000000),
            title: randomName,
            active: false,
            tasks : [
                
            ]
        }

        currentTask.push(newGroup);
        setassignTasks(currentTask);
    }






    
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
                {
                    assignTasks.map((v, index) => (
                            <div key={index} className="assign_wrapper_group">
                                <div className="assign_wrapper_group_header">
                                    <div className="assign_wrapper_group_header_name">
                                        {v.title}
                                    </div>
                                    <div className="assign_wrapper_group_header_icon">
                                        <i className="fa-solid fa-check-double icon-size"></i>
                                    </div>
                                </div>
                                
                                <div className="assign_wrapper_group_body">
                                    {
                                    
                                            v.tasks.map((text, i) => (<AssignTask key={i} groupId={index} text={text} handleDeleteTask={handleDeleteTask} />))
                                        
                                    }
            
                                    <div className="assign_wrapper_group_body_input">
                                        <AssignSelection index={index} onHandleSelection={onHandleSelection} onHandleAdd={onHandleAdd} arrayText={tasks}/>
                                    </div>
                                </div>
                            </div>  
                    ))
                }
                    
                <button onClick={(e) => createNewGroup(e)} className="assign_wrapper_create">
                    <img src={createButton} alt="not found" className="assign_wrapper_create_image" />          
                </button>

            </div>
        </div>
    )
}

export default AssignTasks;