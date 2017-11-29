import React from 'react';
import Header from './header.jsx';
import TodoInput from './todoInput.jsx';
import TodoItem from './todoItem.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 0, text: "Learn some React.js"},

            ],
            nextId: 1
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    saveData(){
        localStorage.setItem('notes', JSON.stringify({todos:this.state.todos}));
    }


    loadData(){
        let notesData = localStorage.getItem('notes');
        // console.log(notesData);
        // let notes = JSON.parse(localStorage.getItem('notes'));
        let notes = JSON.parse(notesData);
        // console.log(notes.todos);
        notes.todos.sort( (a,b) => b.id-a.id);
        let nextId = notes.todos[0].id+1;
        notes.todos.sort( (a,b) => a.id-b.id);

        if(notes) {
            this.setState({
                todos: notes.todos,
                nextId: nextId
            })
        }
    }


    componentDidMount(){
        this.loadData();

    }


    addTodo(todoText) {
        let todos = this.state.todos;
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
        this.saveData()
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        },
        this.saveData());
    }

    render() {
        return (
            <div className="main">
                    <div className="todoBody">
                    <Header />
                    <p> Tasks to do: <h2>{this.state.todos.length}</h2></p>
                    <TodoInput todoText="" addTodo={this.addTodo} />
                    <ul>
                        {
                            this.state.todos.map((todo) => {
                                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports=App;