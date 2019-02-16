import React from 'react';
import TodoItem from './TodoItem';
import {
  Container,
} from './styles';
import TodoItemInput from './TodoItemInput';

interface IProps {
  todos: Array<any>,
};

const TodoList:React.FunctionComponent<IProps> = props => {

  const [todos, setTodos] = React.useState(props.todos);

  const onDone = (id:number, done:boolean) => {
    console.log('Task: ', id, done);
    // TODO API SERVICE
  }

  const onNewTodoItem = (label:string) => {
    // TODO API SERVICE
    setTodos([...todos, {id: 99, done: false, label: label}]);
  }

  const onDeleteItem = (id: number) => {
    // TODO API SERVICE
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return(
    <Container>
      {todos.map(todo => (
        <TodoItem id={todo.id} done={todo.done} label={todo.label} onDone={onDone} onDelete={onDeleteItem}/>
      ))}
      <TodoItemInput onCreate={(label:string) => onNewTodoItem(label)}/>
    </Container>
  )
}

export default TodoList;