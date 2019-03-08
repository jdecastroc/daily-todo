import styled from 'styled-components';

export const Base = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: rgb(110, 123, 139);
  }
`;

export const UserName = styled.div`
  align-items: center;
  display: flex;
  margin-left: 10px;
  font-size: 25px;
`;