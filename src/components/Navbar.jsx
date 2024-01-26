import { Link } from "react-router-dom";



const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar_menu">
                <Link to="/" className="navbar_menu_button">
                    HOME
                </Link>
                <Link to="/tasks" className="navbar_menu_button">
                    T/E/A
                </Link>
                <Link to="/assigntasks" className="navbar_menu_button">
                    ASSIGN
                </Link>
            </div>

            {/*
             <div className="navbar_box">
                <div className="navbar_box_line">

                </div>
                <div className="navbar_box_line">

                </div>
                <div className="navbar_box_line">

                </div>
            </div>
            */}
           
          
        </div>
    )
}



export default Navbar;