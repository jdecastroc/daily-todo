import React from 'react';
import Summary from './Summary';
import NoteEditor from '../../NoteEditor';
import ColumnLayout from '../ColumnLayout';
import AllDaysTable from './AllDaysTable';

const MyDay:React.FunctionComponent = ({}) => {
  return (
    <ColumnLayout 
      firstBlockComponent={<Summary />}
      secondBlockComponent={<NoteEditor />}
      otherStatsComponent={<AllDaysTable />}
    />
  )
}

export default MyDay;