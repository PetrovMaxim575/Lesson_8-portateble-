import React, { useState } from "react";
import {BsBasket2} from 'react-icons/bs'
import Orders from './Orders.jsx';

export default function Header(props){
    let[cartOpen,setCartOpen] = useState(false);
    // делаем действие для кнопки


    return(
        <header>

            <div>
                <span className='logo'>Dosidicus Baits</span>
            
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li>Скачать прайс</li>
            </ul>
            <BsBasket2 onClick = {() => setCartOpen(cartOpen=!cartOpen)} 
            className={`shop-cart-button ${cartOpen && 'active'}`} />
            
            {/* ниже делаем окошко всплывающее, товары добавленые в корзину или их отсутствие */}
            {cartOpen && (
                <div className="shop-cart">
                    {/* создали див нажимаем на иконку - мы делали изменение состояние на притивоположное, ранее то что писали для корзины (!булиан тру фолс) одновременно с этим запускаем ШОП-КАРТ */}
                    
                    {props.orders.map(el => (
                        <Orders key={el.id} item={el}/>
                        ))}


                </div>
            )}

            </div>
            

            {/* =!cartOpen - это значит что мы зададим противоположное значение, было false а при нажатии станет true
            мы могли прописать так: cartOpen=true --> но в таком случае нам бы пришлось отдельно прописывать обратную команду для возврата в false состояние, получилась бы лишняя строка лишняя работа */}

             {/* =!cartOpen - работает как на подобие переключателя, в логике синтаксиса уже записано что он сам многократно будет перекидывать значения с одного на другое, зацикленно */}


            <div className="presentation"></div>
            
        </header>
    );
}