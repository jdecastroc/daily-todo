import React from 'react';
import {
  Container,
  IconContainer,
  LabelContainer,
  DeleteContainer,
} from './styles';
import Circle from './Circle';

interface IProps {
  id: number;
  label: string;
  done: boolean,
  onDone: any,
  onDelete: any,
};

const TodoItem:React.FunctionComponent<IProps> = props => {
  const [done, setDone] = React.useState(props.done || false);

  const onDone = () => {
    setDone(!done);
    props.onDone(props.id, done);
  }

  return (
    <Container onClick={() => onDone()}>
      <IconContainer>
        <Circle done={done} iconClass={'fas fa-check'}/>
      </IconContainer>
      <LabelContainer>
        <span>{props.label}</span>
      </LabelContainer>
      <DeleteContainer onClick={() => props.onDelete(props.id)}>
        <i className="far fa-times-circle"></i>
      </DeleteContainer>
    </Container>
  )
}

export default TodoItem;