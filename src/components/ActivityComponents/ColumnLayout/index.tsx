import React from 'react';
import {
  Base,
  ComponentHeader,
  ComponentContainer,
  Column,
  OtherStatsContainer
} from './styles';
import DayInformation from './DayInformation';
import { IColumnLayout } from '../../../common/types';

const ColumnLayout:React.FunctionComponent<IColumnLayout> = (props) => {
  return (
    <Base>
      <ComponentHeader>
        <DayInformation>

        </DayInformation>
      </ComponentHeader>
      <ComponentContainer direction={'row'}>
        <Column>
          {props.firstBlockComponent}
        </Column>
        <Column>
          {props.secondBlockComponent}
        </Column>
        
      </ComponentContainer>
      {props.otherStatsComponent &&
        <ComponentContainer direction={'column'}>
          <OtherStatsContainer>
            {props.otherStatsComponent}
          </OtherStatsContainer>
        </ComponentContainer>
      }
    </Base>
  )
}

export default ColumnLayout;