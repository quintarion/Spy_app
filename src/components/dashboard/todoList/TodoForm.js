import React from 'react';

class TodoForm extends React.Component {

    componentDidMount(){
        this.refs.itemName.focus();
    }

    onSubmit(event){
        event.preventDefault();
        const newItemValue = this.itemName.value;
        if(newItemValue){
            this.props.addItem({newItemValue});
            this.form.reset();
        }
    }

    render(){
        return(
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." />
                <button type="submit" className="btn btn-default"></button>
            </form>
        )
    }
}

export default TodoForm;
  