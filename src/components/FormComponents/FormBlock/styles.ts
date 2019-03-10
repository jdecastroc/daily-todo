import styled from 'styled-components';

interface IBaseProps {
  direction: string,
}

export const Base = styled.div<IBaseProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  padding: 10px;
  align-items: ${props => props.direction === 'column' ? 'none' : 'center'};
`;

export const Title = styled.div`
  font-weight: 700;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Notes = styled.div``;