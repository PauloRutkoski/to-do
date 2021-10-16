import React, { useState }  from "react";
import "./index.css";

export default function TaskList(props){
    const [name, setname] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const task = {
          name: name,
          checked: false};
        props.setList([...props.list, task]);
        setname("");
      }

    return (
        <form onSubmit={handleSubmit}>
        <header className="container">
          <input placeholder="What Next" className="input" value={name} onChange={(e) => setname(e.target.value)} />
          <button className="btn-confirm" >
            <i className="fa fa-check" />
          </button>
        </header>
      </form>
    );
}