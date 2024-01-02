import React from 'react';
import "../sidebar/sidebar.css"

const Todo = () => {

    const list = ['Добавить задачу','Календарь']

    return (
        <div className="Todo">
            {list.map( (name,key) => {
              return(
                  <div key={key}>
                        <h1 className="promo-text">{name}</h1>
                      <img src={""} alt=""/>
                    </div>
              )
                })}
        </div>
    );
};

export default Todo;