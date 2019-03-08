import React from 'react';
import {
  Base,
  ComponentHeader,
  ComponentContainer,
  Column,
  OtherStatsContainer
} from './styles';
import DayInformation from './DayInformation';
import Summary from './Summary';
import NoteEditor from '../../NoteEditor';

const MyDay:React.FunctionComponent = ({}) => {
  return (
    <Base>
      <ComponentHeader>
        <DayInformation>

        </DayInformation>
      </ComponentHeader>
      <ComponentContainer direction={'row'}>
        <Column>
          <Summary />
        </Column>
        <Column>
          <NoteEditor />
        </Column>
        {/* <TodoProjects /> */}
        
      </ComponentContainer>
      <ComponentContainer direction={'column'}>
        <OtherStatsContainer>
          <span>Todo Information</span> {/* Projects / persons involved */}
          <span>Workout information</span>
          <span>Today grocery list</span>
        </OtherStatsContainer>
      </ComponentContainer>
    </Base>
  )
}

export default MyDay;