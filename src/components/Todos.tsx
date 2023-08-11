import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

/* const Todos = (props:{items: string[], children}) => { */
const Todos:React.FC<{items: Todo[]}> = (props) => {
//함수형 컴포넌트들마다 프롭스가 다 다르기때문에 제네릭을 사용함
    return (
        <ul>
           {props.items.map((item) =>(
             <TodoItem key={item.id} text={item.text} />
           )) }  
        </ul>
    );
};

export default Todos;