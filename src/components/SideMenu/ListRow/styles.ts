import styled from 'styled-components';

export const Base = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  &:hover {
    background-color: #f3f6ff;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-left: 7px;
`;

export const Name = styled.div`
  align-items: center;
  display: flex;
  margin-left: 10px;
  font-size: 20px;
`;