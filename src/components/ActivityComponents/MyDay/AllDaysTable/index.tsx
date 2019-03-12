import React from 'react';
import ReactTable from 'react-table';
import { FaCheck, FaCross, FaWindowClose, FaTimes } from 'react-icons/fa';
import { CellContainer, Base } from './styles';

const AllDaysTable = () => {
  const data = [{
    date: '23/09/2019',
    in: '9:00',
    out: '17:30',
    objective: 'Improve the sql query',
    oportunities: [
      'Estar con kyoko',
      'Conocer a Marcos',
      'Hablar con mama'
    ],
    gratitudeList: [
      'Estar con kyoko',
      'Conocer a Marcos',
      'Hablar con mama'
    ],
    goalsCleared: true,
    meaningfulProgress: true,
    improvedRelationships: false,
    foundEnthusiasm: false,
    happinessLevel: 7,
    overwork: '01:00',

  }]

  const columns = [{
    Header: 'Date',
    accessor: 'date' // String-based value accessors!
  }, 
  {
    Header: 'In',
    accessor: 'in',
    Cell: (props:any) => 
      <CellContainer>
        <span className='number'>{props.value}</span>
      </CellContainer>
  },
  {
    Header: 'Out',
    accessor: 'out',
    Cell: (props:any) => 
      <CellContainer>
        <span className='number'>{props.value}</span>
      </CellContainer>
  },
  {
    Header: 'Objetivo',
    accessor: 'objective',
    Cell: (props:any) => 
    <CellContainer>
      <span className='number'>{props.value}</span>
    </CellContainer>
  },
  {
    Header: 'Oportunities',
    accessor: 'oportunities',
    Cell: (props:any) => 
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {props.value.map((oportunity:string) =>
          <CellContainer>
            <span className='number'>{oportunity}</span>
          </CellContainer>
          )}
      </div> // Custom cell components!
  },{
    Header: 'Agradecimientos',
    accessor: 'gratitudeList',
    Cell: (props:any) => 
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {props.value.map((agradecimiento:string) => 
          <CellContainer>
            <span className='number'>{agradecimiento}</span>
          </CellContainer>
        )}
      </div> // Custom cell components!
  },{
    Header: 'Goals Cleared',
    accessor: 'goalsCleared',
    Cell: (props:any) => <CellContainer><span className='number'>{props.value ? <FaCheck /> : <FaTimes />}</span></CellContainer> // Custom cell components!
  },
  {
    Header: 'Meaningful Progress',
    accessor: 'meaningfulProgress',
    Cell: (props:any) => <CellContainer><span className='number'>{props.value ? <FaCheck /> : <FaTimes />}</span></CellContainer> // Custom cell components!
  },
  {
    Header: 'Improved relationships',
    accessor: 'improvedRelationships',
    Cell: (props:any) => <CellContainer><span className='number'>{props.value ? <FaCheck /> : <FaTimes />}</span></CellContainer> // Custom cell components!
  },
  {
    Header: 'Found enthusiasm',
    accessor: 'foundEnthusiasm',
    Cell: (props:any) => <CellContainer><span className='number'>{props.value ? <FaCheck /> : <FaTimes />}</span></CellContainer> // Custom cell components!
  },
  {
    Header: 'Happiness level',
    accessor: 'happinessLevel',
    Cell: (props:any) => <CellContainer><span className='number'>{props.value}</span></CellContainer> // Custom cell components!
  },
  {
    Header: 'Overwork',
    accessor: 'overwork',
    Cell: (props:any) => <CellContainer><span className='number'>{props.value}</span></CellContainer> // Custom cell components!
  }
]

  return (
    <Base>
      <ReactTable
        data={data}
        columns={columns}
      />
    </Base>
  )
}

export default AllDaysTable;