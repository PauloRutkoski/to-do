import React, { useState } from "react";
import "./index.css";

export default function TaskCard(props) {
    const [check, setCheck] = useState(props.task.checked);

    

    return (
        <li className="card" key={props.index}>
            <div class="container">
                {checkbox(check, setCheck)}
                {props.task.name}
            </div>
            
            <div class="dropdown">
                <button class="dropdown-button">
                    <i class="fa fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-content">
                    <a>
                        <i className="fa fa-edit" />
                        Edit
                    </a>
                    <a>
                        <i className="fa fa-trash" />
                        Delete
                    </a>
                </div>
            </div>
        </li>
    );  
}

function checkbox(checked, setCheck) {
    if (checked) {
        return (
            <div className="check done" onClick={() => setCheck(false)}>
                <i className="fa fa-check" />
            </div>
        );
    }
    return (
        <div className="check not-done" onClick={() => setCheck(true)} />
    );
}
