import styled from 'styled-components';

interface IContainerProps {
  done?: boolean,
}

export const Container = styled.div<IContainerProps>`
  border: ${props => props.done ? '1px solid #6cb100' : '1px solid grey'};
  border-radius: 22px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: ${props => props.done ? '#6cb100' : 'none'};
  svg {
    color: ${props => props.done ? 'white' : 'grey'};
    display: ${props => props.done ? 'flex' : 'none'};
  }
  :hover {
    svg {
      display: flex;
    }
  }
`;

export const ContainerInfo = styled.div`
  border: 1px solid #006edc;
  border-radius: 22px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: white;
  background-color: #006edc;
  :hover {
    background-color: #147be3;
  }
`;