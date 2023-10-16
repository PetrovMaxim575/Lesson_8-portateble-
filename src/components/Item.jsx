import React from "react";

export default function Item(props){
    return(
        <div className="item">
            <img src={'./images/' + props.item2.img} alt="alt_text" />
            <h2>{props.item2.title}</h2>
            <p>{props.item2.desc}</p>
            <b>{props.item2.price}</b>
            <div className="add-to-cart" onClick={()=>props.onAdd(props.item2)}>Добавить в корзину</div>
        </div>
    );
}

// БАГ - был момент с добавлением пути картинки './images/', картинки не возникали, нужно было просто удалить путь к папке с картинками, и просто заного прописать его вручную

// Реакт - проблемы с виртуальным домом - код может быть верным и ошибок в терминал не выводить, но баги - никак не отловимые, решаются такими путями