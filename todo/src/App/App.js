import React, { useState } from 'react';
import "./App.css";
import Logo from "../assets/logo.png";
import TaskList from "../TaskList";
import TaskInput from "../TaskInput";

export default function App() {
  const [list, setList] = useState([]);

  

  return (
    <div className="column">
      <img className="logo" src={Logo}/>
      <TaskInput setList={setList} list={list} />
      <TaskList list={list} />
    </div>
  );
}
