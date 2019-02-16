import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  :hover {
    cursor: pointer;
    svg {
      display: flex;
    }
  }
`;

export const IconContainer = styled.div`
  margin-right: 5px;
`;

export const LabelContainer = styled.div`
  input{
    border: none;
    width: 330px;
  }
`;