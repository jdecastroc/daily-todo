import React from 'react';
import {
  Base,
  Icon,
  Name,
} from './styles';
import { ISideMenuListProps } from '../../../common/types';

const ListRow:React.FunctionComponent<ISideMenuListProps> = (props) => {
  return(
    <Base onClick={() => props.onClick(props.component)}>
      <Icon>
        {props.emoji}
      </Icon>
      <Name>
        <span>{props.name}</span>
      </Name>
    </Base>
  )
}

export default ListRow;