import React from 'react';
import ColumnLayout from '../ColumnLayout';
import TodoList from '../../TodoList';
import { MdiaryInfo } from '../../../../__mocks__/diary';

const Todo:React.FunctionComponent = ({}) => {
  const [diaryInfo, setDiaryInfo] = React.useState<any>(undefined);

  React.useEffect(() => {
    setTimeout(() => setDiaryInfo(MdiaryInfo[0]), 100);
  }, []);
  return (
    <ColumnLayout
      firstBlockComponent={diaryInfo ? <TodoList todos={diaryInfo.todos}/> : <div></div>}//Todo list
      secondBlockComponent={<div></div>}//Pomodoro
    />
  )
}

export default Todo;