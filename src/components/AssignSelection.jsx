



const AssignSelection = ({arrayText}) => {
    return(
        <div className="assignselection">
            <div className="assignselection_label">
                Assing a task to the group
            </div>
            <div className="assignselection_wrapper">
                <select className="assignselection_select" name="task" id="task">
                    {
                        arrayText.map((v, i) => <option key={i} value={v}>{v}</option>)
                    }

                </select>
                <button className="assignselection_button">ADD</button>
            </div>
          
        </div>
    )
}

export default AssignSelection;