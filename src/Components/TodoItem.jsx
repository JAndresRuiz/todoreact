import React from "react";
import "../Styles/TodoItem.css";
import { ReactComponent as Controlar } from "../Img/controlar.svg";
import { ReactComponent as Cruzar } from "../Img/cruzar.svg";

const TodoItem = (props) => {
  return (
    <li className="todoItem">
      <button className={`${props.completed && "controlar"}`} onClick={props.onComplete} >
        <Controlar />
      </button>
      <p className={`todoText ${props.completed && "todoFinish"}`}>
        {props.text}
      </p>
      <button className="cruzar" onClick={props.onDelete} >
        <Cruzar />
      </button>
    </li>
  );
};

export { TodoItem };
