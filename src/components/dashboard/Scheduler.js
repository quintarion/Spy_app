import React from 'react';
import GetContact from './GetContact';
import TodoApp from './todoList/TodoApp';

import './Scheduler.scss'

const Scheduler = () => {
    return (
        <div className="scheduler">
            <GetContact />
            <TodoApp />
        </div>
    )
}

export default Scheduler;