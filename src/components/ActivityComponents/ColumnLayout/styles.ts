import styled from 'styled-components';

interface IComponentContainerProps {
  direction: string;
}

export const Base = styled.div`
  height: 100%;
  width: 100%;
  border-left: 2px solid #f2f2f2;
  margin-left: 300px;
`;

export const ComponentHeader = styled.div`
  width: 100%;
  height: 10vh;
`;

export const ComponentContainer = styled.div<IComponentContainerProps>`
  display: flex;
  flex-direction: ${props => props.direction};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  width: 100%;
  border: solid rgba(0, 0, 0, 0.4) 2px;
  border-radius: 5px;
`;

export const OtherStatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;