import React from "react";

export default function Order(props){
    return(
        <div className="item">
            <img src={'./images/' + props.item.img} alt="alt_text" />
            <h2>{props.item.title}</h2>
            <b>{props.item.price}</b>
        </div>
    );
}


























