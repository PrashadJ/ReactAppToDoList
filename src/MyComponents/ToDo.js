import React from 'react'
import { ToDos } from '../MyComponents/ToDos';

export const ToDo = (procs) => {
    return (
        <div className ='container'>
            {/* <p>{procs.todosList[0]}</p> */}
            <h4 className="text-center">TODO LIST</h4>
            {
                procs.todosList.map((element) => {         
                    return <ToDos todo = {element} key= {element.srNo} onDelete = {procs.onDelete}/> 
                 
                })
            }
            
        </div>
    )
}
