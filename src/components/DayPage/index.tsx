import React, {useEffect, useState} from 'react';
import {
  Base,
  Container,
  ColumnLeft,
  ColumnRight,
  GeneralElementContainer
} from './styles';
import Calendar from 'react-calendar/dist/entry.nostyle';
import TopHeader from '../TopHeader';
import TodoList from '../TodoList';
import NoteEditor from '../NoteEditor';
import { MdiaryInfo } from '../../../__mocks__/diary';

const DayPage:React.FunctionComponent = ({}) => {

  const [date, setDate] = useState<any>(new Date());
  const [diaryInfo, setDiaryInfo] = useState<any>(undefined);

  useEffect(() => {
    setTimeout(() => setDiaryInfo(MdiaryInfo[0]), 100);
  });

  return (
    <Base>
      <TopHeader/>
      <Container>
        <ColumnLeft>
          <Calendar
            onChange={value => setDate(value)}
            value={date}
          />
        </ColumnLeft>
        <ColumnRight>
          {/* <span>{date.toDateString()}</span> */}
          {diaryInfo ? 
            <React.Fragment>
              <TodoList todos={diaryInfo.todos}/>
              <GeneralElementContainer>
                {/* <span>NOTES</span>
                {diaryInfo.notes.map(note => (
                  <span>{note}</span>
                ))} */}
              </GeneralElementContainer>
            </React.Fragment>
            :
            <div>Loading...</div>
          }
        </ColumnRight>
        
      </Container>
      <NoteEditor />

    </Base>
  )
}

export default DayPage;
