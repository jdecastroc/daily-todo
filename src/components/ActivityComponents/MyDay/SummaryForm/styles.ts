import styled from 'styled-components';

export const Base = styled.div`
`;

export const InputBlock = styled.div`
  border: 1px solid rgba(0, 0, 0, .4);
  border-radius: 5px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  width: 80%;
  input {
    border: none;
    width: 100%;
  }
`;

export const SubmitButtonContainer = styled.div`
  
  
  display: flex;
  justify-content: center;
  button {
    border: none;
    border: 1px solid rgba(0, 0, 0, .4);
    border-radius: 5px;
    padding: 5px;
    width: 150px;
    background-color: #0d89eb;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: #46adff;
    }
  }
`;