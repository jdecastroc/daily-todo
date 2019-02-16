import React from 'react';
import {
  Container,
  ContainerInfo,
} from './styles';

interface IProps {
  done?: boolean,
  iconClass: string,
  type?: string,
};

const Circle:React.FunctionComponent<IProps> = props => (
    props.type === 'info' ?
    <ContainerInfo>
      <i className={props.iconClass}></i>
    </ContainerInfo>
    :
    <Container done={props.done}>
      <i className={props.iconClass}></i>
    </Container>
)

export default Circle;