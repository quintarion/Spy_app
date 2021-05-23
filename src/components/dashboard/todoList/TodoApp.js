import React from 'react';
import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { todoItems } from './todoItems.js';

//https://codepen.io/penny1119/pen/xENWYq 
// Is not OK

class TodoApp extends React.Component {
    state = {
        todoItems: {todoItems}
    }
  
    addItem(todoItem){
        todoItems.unshift({ //adds one or more elements to the start of an array and returns the new length of the array
            index: todoItems.length+1,
            value: todoItem.newItemValue,
            done: false
        });
        this.setState({todoItems: todoItems});
    }

    removeItem(itemIndex){
        todoItems.splice(itemIndex,1); //replaces 1 element at index 'itemIndex'
        this.setState({todoItems: todoItems});
    }

    markTodoDone(itemIndex){
        let todo = todoItems[itemIndex];
        todoItems.splice(itemIndex,1);
        todo.done = !todo.done;
        todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        this.setState({todoItems: todoItems});
    }

    render(){
        return(
            <div className="todoForm">
                <TodoHeader />
                <TodoForm addItem={this.addItem} />
                <TodoList items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
            </div>
      )
    }
}

export default TodoApp;