import React, {useState} from 'react';

const Results = (props) => {

    const {task, id, deleteFunction } = props;

    const [line, setLine] = useState(false);

    const handleCheckBox = () => {
        setLine(!line)}

    return (
        <div>
            <label style={{textDecoration: line ? "line-through" : "none" }}>{task}</label>
            <input type="checkbox" id="tasks" name="tasks" onChange={handleCheckBox}/>
            <button className="delete" onClick={() => deleteFunction(id)}>Remove</button>
        </div>
    );
};

export default Results