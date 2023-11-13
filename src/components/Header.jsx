import React, { useState } from "react";
import {BsBasket2} from 'react-icons/bs'
import Orders from './Orders.jsx';
import { saveAs } from "file-saver";
import PriceListPDF from './PriceListPDF.jsx'
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";

const showOrders=(props)=>{ 
    let summa=0; 
    props.orders.forEach(el => summa +=Number.parseFloat(el.price))
    // парсинг пример, изначально цена у нас строка - приводим ее к числу
    // .parseFloat() - еобходи если у нас появятся числа с плавающей точкой


    return(
        <div>
            {props.orders.map(el => (
                <Orders onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            {/* <p className="summa">К оплате: {summa} $</p> */}
            {/* выше правильная строка --> но может баговать */}
            <p className="summa">Без бага: {new Intl.NumberFormat().format(summa)}</p>
        </div>

        // испрвление юага счета = бывает пишет число.00000000 бесконечные нули
        // {new Intl.NumberFormat().format(summa)} пишем вместо --> {summa} в теге П
    );
}
const showNothing=()=>{
    return (
        <div className='empty'>
            <h2>Корзина пуста!</h2>
        </div>
    )
}

export default function Header(props){
    let[cartOpen,setCartOpen] = useState(false);
    // делаем действие для кнопки

    const handleDownloadPDF = async () => {
        const pdfBlob = await pdf(<PriceListPDF items={props.items} />).toBlob();
        saveAs(pdfBlob, "price.pdf");
    };

    return(
        <header>

            <div>
                <span className='logo'>Dosidicus Baits</span>
            
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
                <li onClick={handleDownloadPDF}>Скачать прайс</li>
            </ul>
            <BsBasket2 onClick = {() => setCartOpen(cartOpen=!cartOpen)} 
            className={`shop-cart-button ${cartOpen && 'active'}`} />
            


            {/* ниже делаем окошко всплывающее, товары добавленые в корзину или их отсутствие */}
            {cartOpen && (
                <div className="shop-cart">
                    {/* создали див нажимаем на иконку - мы делали изменение состояние на притивоположное, ранее то что писали для корзины (!булиан тру фолс) одновременно с этим запускаем ШОП-КАРТ */}
                   
                    {props.orders.length>0 ? 
                        showOrders(props) : showNothing()
                    }
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