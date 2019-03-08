import React from 'react';
import {
  Base,
  UserAvatar,
  UserName,
} from './styles';
import { ISideMenuUserProps } from '../../../common/types';

const UserRow:React.FunctionComponent<ISideMenuUserProps> = (props) => {
  return(
    <Base>
      <UserAvatar>
        <img src={props.avatar}></img>
      </UserAvatar>
      <UserName>
        <span>{props.username}</span>
      </UserName>
    </Base>
  )
}

export default UserRow;