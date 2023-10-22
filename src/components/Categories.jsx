import React from "react";

export default function Categories(props){
    
    // создаем переменную категории в виде массива
    const categories=[
        {
            key:'all',
            name:'Все'
        },
        {
            key:'boiles',
            name:'Бойлы'
        },
        {
            key:'popups',
            name:'POP-UPS'
        },
        {
            key:'liquids',
            name:'Жидкости'
        },
        {
            key:'aroma',
            name:'Арома-добавки'
        }
    ];
    
    return(
        <div className="categories">
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>
                    {el.name}
                </div>
            ))}
        </div>
    );
}















