import React from "react";
import {BsBasket2} from 'react-icons/bs'

export default function Order(props){
    return(
        <div className="item">
            <img src={'./images/' + props.item.img} alt="alt_text" />
            <h2>{props.item.title}</h2>
            <b>{props.item.price}</b>
            <BsBasket2 className="delete-icon" onClick={()=> props.onDelete(props.item.id)}/>
        </div>
    );
}


























