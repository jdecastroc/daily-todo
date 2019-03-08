import React from 'react';
import{
  Base,
  Title,
  Container,
} from './styles';
import { IActivityBox } from '../../common/types';

const ActivityBox:React.FunctionComponent<IActivityBox> = (props) => {
  return(
    <Base>
      {props.title && <Title>{props.title}</Title>}
      <Container>
        {props.children}
      </Container>
    </Base>
  )
}

export default ActivityBox;