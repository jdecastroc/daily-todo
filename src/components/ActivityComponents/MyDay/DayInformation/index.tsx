import React from 'react';
import { Base, ComponentTitle, ComponentSubtitle } from './styles';

const DayInformation:React.FunctionComponent = () => {
  return(
    <Base>
      <ComponentTitle>My Day</ComponentTitle>
      <ComponentSubtitle>Wednesday 29 March</ComponentSubtitle>
    </Base>
  )
}

export default DayInformation;
