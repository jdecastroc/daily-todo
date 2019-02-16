import React from 'react';
import {
  Container,
  LeftSide,
  RightSide,
} from './styles';

interface IProps {

}

const TopHeader:React.FunctionComponent<IProps> = props => {

  return(
    <Container>
      <LeftSide>
        <span>Hi, Hoppy</span>
      </LeftSide>
      <RightSide>
        <span>In: 10:00</span>
        <span>Out: 19:00</span>
        <span>Happiness: 7</span>
      </RightSide>
    </Container>
  )
}

export default TopHeader;