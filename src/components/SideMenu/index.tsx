import React from 'react';
import {Base, Container, List} from './styles';
import UserRow from './UserRow';
import ListRow from './ListRow';
import Emoji from '../Emoji';
import { ISideMenuProps } from '../../common/types';



const SideMenu:React.FunctionComponent<ISideMenuProps> = (props) => {

  return(
    <Base>
      <Container>
        <UserRow 
          avatar={props.userInformation.avatar}
          username={props.userInformation.username}
        />
        <List>
          {
            props.userInformation.lists.map(list => (
              <ListRow
                key={`task-list-element-${list.component}`}
                name={list.name}
                component={list.component}
                onClick={props.onChangeList}
                emoji={
                  <Emoji symbol={list.icon} />
                }
              />
            ))
          }
        </List>
      </Container>
    </Base>
  )
}

export default SideMenu;