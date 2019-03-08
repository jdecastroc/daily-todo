import React from 'react';
import {
  Container,
  IconContainer,
  LabelContainer,
} from './styles';
import Circle from '../TodoItem/Circle';

interface IProps {
  onCreate: any,
};

const TodoItemInput:React.FunctionComponent<IProps> = props => {

  const [inputTodo, setInputTodo] = React.useState('');

  const onItemCreation = () => {
    if(inputTodo.length === 0) return;
    props.onCreate(inputTodo);
    setInputTodo('');
  }

  const onHandleInputChange = (value:string) => setInputTodo(value);

  return (
    <Container>
      <IconContainer onClick={() => onItemCreation()}>
        <Circle type={'info'} iconClass={'fas fa-plus'}/>
      </IconContainer>
      <LabelContainer>
        <input type="text" name="newTodo" placeholder={'add todo'} value={inputTodo} onChange={event => onHandleInputChange(event.target.value)} />
      </LabelContainer>
    </Container>
  )
}

export default TodoItemInput;