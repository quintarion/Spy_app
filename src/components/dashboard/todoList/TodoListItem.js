import React from 'react';

class TodoListItem extends React.Component {

    onClickClose(){
        const index = parseInt(this.props.index);
        this.props.removeItem(index);
    }

    onClickDone(){
        const index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }

    render(){
        let todoClass = this.props.item.done ? "done" : "undone";

        return(
            <li className="list-group-item">
            <div className={todoClass}>
                <span className="glyphicon glyphicon-ok icon" onClick={this.onClickDone}></span>
                {this.props.item.value}
                <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
            </div>
            </li>
        );
    }
}

export default TodoListItem;