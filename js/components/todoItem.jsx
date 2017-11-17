import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }






    render() {
        return (
            <div className="todoRow">
                <div>
                    {this.props.todo.text}
                </div>
                <div>
                    <button className="removeBtn" onClick={(e)=> this.removeTodo(this.props.id) }>Remove</button>
                    <button className="editBtn">Edit</button>
                </div>
            </div>
        );
    }
}

module.exports=TodoItem;