import React from 'react';
import ActivityBox from '../../../ActivityBox';

const Summary:React.FunctionComponent = () => {
  return(
    <ActivityBox title={'Summary'}>
      <span>Objetivo: </span>
      <span>Oportunidades: </span>
      <span>Agradecimientos: </span>
      <span>Did I clear my goals: </span>
      <span>Did I make meaningful progress: </span>
      <span>Did I do my best to build positive relationshipts: </span>
      <span>Did I find enthusiasm: </span>
      <span>Happy score: </span>
      <span>End day button</span>
    </ActivityBox>
  )
}

export default Summary;
