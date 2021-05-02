import './App.css';
import Header from "./MyComponents/Header";
import { ToDo } from './MyComponents/ToDo';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';



function App() {

  const [todoList, setstate] = useState([
    {
      srNo: '1',
      desc: 'Go to the market'
    },{
      srNo: '2',
      desc: 'Go to the shop'
    },{
      srNo: '3',
      desc: 'Go to the park'
    },{
      srNo: '4',
      desc: 'Go to the cinema hall'  }
  ]);
  
  let onDelete = (todo) =>{
    console.log('I\'m on delete '+todo.desc);
    setstate(todoList.filter((e)=>{
      return e!==todo;
    }
    ));
  }

  return (
     <>
      <Header searchBar = {true}/>
      <ToDo todosList={todoList} onDelete = {onDelete}/>
      <Footer/>
     </> 
  );
}


export default App;
