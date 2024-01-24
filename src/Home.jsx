


import logo from "../resources/logo.png";
import clock from "../resources/clock.png"
import clockHand from "../resources/clockhand.png"


import { useEffect, useState } from "react";
import LoadingTask from "./components/LoadingTask";



const Home = () => {
    const [info, setInfo] = useState({})

    //this must give empty object to match the check below
    const [doing, setDoing] = useState({})



    const handleTaskClick = (e, index, id) => {
        e.preventDefault();

        //take the ID of the current task you've click
        //find the task in the array
        //change it base on the information
        //update it to the doing if it's
        let newDoing = {};
        let cloneInfo = {...info};
        for(let i = 0; i < cloneInfo.tasks.length; i++){
            if(cloneInfo.tasks[i].id == id){
                //found it
              
                if(cloneInfo.tasks[i].doing == false && cloneInfo.tasks[i].completed == false){
                    //this in its original state
                    cloneInfo.tasks[i].doing = true;
                    newDoing = cloneInfo.tasks[i]
                    newDoing["index"] = i+1;

                    //now everything before this need to be "done"
                    //we don't want to mark this index, we want to mark the one before this and backward
                    index-=1;
                    MarkDoneBackward(index, cloneInfo.tasks);

                }else if (cloneInfo.tasks[i].doing == true && cloneInfo.tasks[i].completed == false){
                    cloneInfo.tasks[i].doing = false;
                    cloneInfo.tasks[i].completed = true;

                }else if (cloneInfo.tasks[i].doing == false && cloneInfo.tasks[i].completed == true){
                    cloneInfo.tasks[i].completed = false;
                }
                setDoing(cloneInfo);
                setDoing(newDoing);
            }
        }
      
    }

    function MarkDoneBackward(index, array){
        if(index > 0){
            for(let i = index; i >= 0; i--){
                // backward completion
                array[i].doing = false;
                array[i].completed = true;
            }
        }
       
    }






    useEffect(() => {

        //load this first time
        let randomID  = Math.floor(Math.random() * 1000000);
        let information = {
            id : randomID,
            title: "New Group 1",
            active: true,
            tasks : [
                {
                    id: "t_00001",
                    text: "Early Bird - Wake up early",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00002",
                    text: "Morning Stretch - Exercise",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00003",
                    text: "Clean up - Morning Shower",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00004",
                    text: "Breakfast",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00005",
                    text: "Work - Project",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00006",
                    text: "Break - take a lil break",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00007",
                    text: "Back to work - more grinding",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00008",
                    text: "Lunch - time to refill",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00009",
                    text: "Let loose - relax",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00010",
                    text: "Back to work - more grinding",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00011",
                    text: "Take a lil break - don't stress out",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00012",
                    text: "Back to work - more grinding",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00013",
                    text: "Cook - making some dinner",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00014",
                    text: "Enjoy your hardwork - dinner time",
                    completed: false,
                    doing: false,
                },
                {
                    id: "t_00015",
                    text: "Do as you please time - catch up on things you missed",
                    completed: false,
                    doing: false,
                },
            ]

        };

        setInfo(information)

    }, []);

    return(
        <div className="home">
     

            <div className="home_logo">
                <img src={logo} alt="not found" className="home_logo_img" />
            </div>

            <div className="home_wrapper">
                <div className="home_wrapper_left">
                    <div className="home_wrapper_clock">
                        <img src={clock} alt="not found" className="home_wrapper_clock_img" />
                        <img src={clockHand} alt="not found" className="home_wrapper_clock_img-hand"/>

                    </div>
                    <div className="home_wrapper_times">
                        <div className="home_wrapper_times_frame">
                            <div className="home_wrapper_times_frame_hour">
                                00
                            </div>
                            <div className="home_wrapper_times_frame_khan">
                                <div className="home_wrapper_times_frame_khan_dot">

                                </div>
                                <div className="home_wrapper_times_frame_khan_dot">

                                </div>

                            </div>
                            <div className="home_wrapper_times_frame_minute">
                                20
                            </div>
                        </div>
                        <div className="home_wrapper_times_frame home_wrapper_times_frame-long">
                            <div className="home_wrapper_times_frame_hour">
                                01
                            </div>
                            <div className="home_wrapper_times_frame_khan">
                                <div className="home_wrapper_times_frame_khan_dot">

                                </div>
                                <div className="home_wrapper_times_frame_khan_dot">

                                </div>

                            </div>
                            <div className="home_wrapper_times_frame_minute">
                                20
                            </div>
                        </div>
                    </div>
                </div>
                
            
                <div className="home_wrapper_list">
                    <div className="home_wrapper_list_background">
                        <div className="home_wrapper_list_background_head">
                           { Object.keys(doing).length > 0 ? doing.index + ". " + doing.text : "You are not doing anything right now."}
                        </div>  
                        <div className="home_wrapper_list_background_actions">
                            {
                                info.tasks ? info.tasks.map((v, i) => (
                                    <LoadingTask key={i} value={v} index={i} handleTaskClick={handleTaskClick} />
                                )) : ""
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Home;