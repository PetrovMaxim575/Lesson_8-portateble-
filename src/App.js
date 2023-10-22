import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Items from './components/Items';
import Categories from './components/Categories';
import { useEffect } from 'react';
import ShowFullItem from './components/showFullItem';


export default function App() {

  const [orders, setOrders] = useState([]);

  // у нас будет еще одна переменная которая будет помогать нам, что бы при фильтрации появлялись только определенные товары той категории которые мы выбрали, мыд обалвяем между Итемс и Ордерс - она будет работать тоже с ЮзСтэйт - изменения состояния
  const [currentItems,setCurrentItems]=useState([]);
  // ========================================================================

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ДОБАВЛЕНИЕ ЭФФЕКТА (НИЖЕ)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // сейчас мы сделаем что бы при нажатии на карточку товара, он выходил на передний план и отображался более крупно - сам элемент - помогало более подробно ознакомиться с товаром - всплывающаая карточка при нажатии

  const [showFullItem, setShowFullItem] = useState(false);
  // пописываем значение False - что бы по умолчанию у нас товары не отображался крупно и вообще не отображался

  // ========================================================================


  const [items,setItems] =useState([
    
    {
      id:1, 
      title:'Бойл_1', 
      img: 'b01.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'boiles',
      price: '1500',     
    },

    {
      id:2, 
      title:'Бойл_2', 
      img: 'b02.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'boiles',
      price: '1200',     
    },

    {
      id:3, 
      title:'Бойл_3', 
      img: 'b03.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'boiles',
      price: '1100',     
    },

    {
      id:4, 
      title:'Pop-ups_4', 
      img: 'c1.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'popups',
      price: '1000',     
    },

    {
      id:5, 
      title:'Pop-ups_5', 
      img: 'c2.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'popups',
      price: '1000',     
    },

    {
      id:6, 
      title:'Pop-ups_6', 
      img: 'c3.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'popups',
      price: '1000.99',     
    },

    {
      id:7, 
      title:'Ликвид_7', 
      img: 'c4.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'liquids',
      price: '1000',     
    },

    {
      id:8, 
      title:'Ликвид_8', 
      img: 'c5.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'liquids',
      price: '1000.99',     
    },

    {
      id:9, 
      title:'Ликвид_9', 
      img: 'c6.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'liquids',
      price: '1000',     
    },

    {
      id:10, 
      title:'Ликвид_10', 
      img: 'c7.jpg',
      desc: 'text text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text texttext text text text text text text text text text text text text text text text text text', 
      // desc текст о товаре
      category: 'aroma',
      price: '1000',     
    }

  ])
  // метод some - проверяет надлличие товара, если он есть то значение товара ТРУ и он не доабвит нам его больше, изюегание ДДоС атак

  // ниже - используем хук ЮзЭффект - что бы у нас при первой загрузке страницы сразу отображались все товары, предварительно ЮзЭффект подключаем в голове документа из библиотеки Реакт
  useEffect(()=> {
    setCurrentItems(items);
  }, [items]);


  const addToOrder= (item3) => {
    if(!orders.some((el)=>el.id===item3.id)){
      setOrders([...orders,item3]);
    }

  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  // делаем ф.ционал для наших кнопок "СОРТИРОВОК ПО КАТЕГООРИЯМ"

  const chooseCategory=(category)=>{
    // делаем проверку
    if(category==="all"){
      setCurrentItems(items);
    }
    else{
      setCurrentItems(items.filter((el)=> el.category === category));
    }
  }

  // сейчас будем прописывать логику увеличения карточки товара при нажатии
  const onShowItem = (item)=>{
    setShowFullItem(!showFullItem);
  }


  return (
    <div className='wrapper'>
      <Header orders={orders} onDelete={deleteOrder}/>
      {/* добавление компонента категории */}
      <Categories chooseCategory={chooseCategory}/>

      {/* <Items allItems={items} onAdd={addToOrder}/>
      было такое значение, тперь мы будем применять сортировку по категориям, и нам необходимо заменить значение {items} на {currentItems} */}
      <Items allItems={currentItems} 
      onShowItem={onShowItem}
      // добавляем ОнШоуИтем в Итемс - что бы добавить укрупненное отображение товара
      // поскольку вызов будет в Итемс - далее переходим в Итемс джиэсикс - и делаем работу в нем
      // <<<!!!>>>!!!>>> ссылка в итемс джиисикс
      onAdd={addToOrder}/>
      {/* после применения куррентИтемс у нас пропадут все товары со страницы - тоесть у наз загрузка страницы и поскоьку мы не выбрали никакую ктегорию все товары просто скрываются, видимо нам необходимо прописать еще логику, что при загрузке страницы, что бы товары в первую прогрузку отображались даже если мы не успели применить КАТЕГОРИИ */}

      {/* ЗАГРУЗКА СТРАНИЦЫ ПОСЛЕ ФИЛЬТРАЦИИ - ПРОПАЖА ТОВАРОВ!
      что теперь нам необходимо сделать что бы таокго не было (так же если товара 2 есть прогалы между товарами!)

      как работает у нас есть товары и категории - есть проверка - пока мы не нажмем на кноаку проверка не запуститься и товары неотобразятся, и товары у нас не появятся скрипт не выполнится, мы используем хук эффекта ЮзЭффект - пи запуске страницы у нас сразу будет обображаться ИЗМЕНЕННОЕ состояние сразу Итемсы - будут передаваться, при этом если мы уже начнем работать с категориями будем их менять будет включаться ф.ция выбора категории и будут оборажаться товары которые мы выбрали по определенным категориям, когда хотим вернуться нажиманем на ВСЕ и уже запускается внутри выброра категории ф.ции как раз таки то условие - если мы выброали категорию все - будут выводиться ВСЕ */}

      {/* НИЖЕ - также как и делали открытие корзины, аналогинчая ситуация, при нажатии на товары будет показываться и скрываться всплывающее окно содержиащее товар */}
      {showFullItem && <ShowFullItem />}

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