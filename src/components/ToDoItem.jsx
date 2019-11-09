import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ToDoItem extends Component {

    getStyle(){
        return {
            background: '#f4f4f4',
            padding: '2px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() { 
        const { id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type = "checkbox" onClick = {this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button onClick = {this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        );
    }
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
};
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }
 
export default ToDoItem;