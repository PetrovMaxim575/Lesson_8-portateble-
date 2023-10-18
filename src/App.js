import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Items from './components/Items';



export default function App() {

  const [orders, setOrders] = useState([]);
  const [items,setItems] =useState([
    
    {
      id:1, 
      title:'Бойл_1', 
      img: 'b01.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Бойлы',
      price: '1500',     
    },

    {
      id:2, 
      title:'Бойл_2', 
      img: 'b02.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Бойлы',
      price: '1200',     
    },

    {
      id:3, 
      title:'Бойл_3', 
      img: 'b03.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Бойлы',
      price: '1100',     
    },

    {
      id:4, 
      title:'Pop-ups_4', 
      img: 'c1.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Бойлы',
      price: '1000',     
    },

    {
      id:5, 
      title:'Pop-ups_5', 
      img: 'c2.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Смеси',
      price: '1000',     
    },

    {
      id:6, 
      title:'Pop-ups_6', 
      img: 'c3.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Смеси',
      price: '1000.99',     
    },

    {
      id:7, 
      title:'Ликвид_7', 
      img: 'c4.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Смеси',
      price: '1000',     
    },

    {
      id:8, 
      title:'Ликвид_8', 
      img: 'c5.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Аромадобавки',
      price: '1000.99',     
    },

    {
      id:9, 
      title:'Ликвид_9', 
      img: 'c6.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Аромадобавки',
      price: '1000',     
    },

    {
      id:10, 
      title:'Ликвид_10', 
      img: 'c7.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'Аромадобавки',
      price: '1000',     
    }

  ])

  // метод some - проверяет надлличие товара, если он есть то значение товара ТРУ и он не доабвит нам его больше, изюегание ДДоС атак
  const addToOrder= (item3) => {
    if(!orders.some((el)=>el.id===item3.id)){
      setOrders([...orders,item3]);
    }

  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  }


  return (
    <div className='wrapper'>
      <Header orders={orders} onDelete={deleteOrder}/>

      <Items allItems={items} onAdd={addToOrder}/>

      <Footer />
    </div>
  );


}

// { {items} - это то что будем передавать из "const [items," ... items= это просто похожее название, что бы не путаться}

// export default App; удаляем эту строку, что бы не прописывать в отдельной строке, просто переносим суть этой строки в строку выше:

// было: "function App()" { --->  стало: "export default function App() {"


// Создание реакт проекта:
// 1-создается папка проекта (нивкоем случае не должно быть слова React - нивкаком виде)
// 2-открываем в MVSC папку с проектом
// 3-запускаем терминал
// 4-прописываем команду "npx create-react-app nameproject" - nameproject наименование проекта
// 5-занимается какое то время, скачивание распаковка проекта
// 6-запуск проекта - в терминал последовательно прописываются комманды:

// cd nameproject
// npm start

// nameproject - соовтетствует наименованию созданной папки (которая создавалась не нами а самим реактом)

// 7-ошибка "npm ERR! errno -4058" если ранее запускался другой проект, необходимо прописать команду:
// // cd nameproject
// // npm start

// Или полностью очистить КЭШ:
// npm cache clean --force

// Задача - мы создаем интернет магазин, у нас будут товары, у нас будет фильтрация по товарам, корзина - сможем добавлять товары удалять, отображаться цена кнопка перейти к оплате, офны изображения тектсы товаров все будет. Код в плане структуры проекта будет одинаковый, а вот информация фото дизайны стиливая вся чась на нашей стороне, в пладне как будет выгдеть страница, постараемся держать на одном уровне что бы не съехало, адаптации и стилевого оформления дизайна это по нашей части ограничений никаких не будет, будем делать как угодно. 

// По дизайну никак не ограничивают

// Будем импортировать шрифты с библиотеки "https://fonts.google.com/"