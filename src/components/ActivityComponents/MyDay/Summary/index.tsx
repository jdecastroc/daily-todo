import React from 'react';
import ActivityBox from '../../../ActivityBox';
import SummaryForm from '../SummaryForm';

const Summary:React.FunctionComponent = () => {
  return(
    <ActivityBox title={'Summary'}>
      <SummaryForm />
    </ActivityBox>
  )
}

export default Summary;
