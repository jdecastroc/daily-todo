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

export const LabelContainer = styled.div``;

export const DeleteContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  color: red;
  ${Container}:hover & {
    display: flex;
  }
`;