import React from 'react';
import { IFormBlockProps } from '../../../common/types';
import {
  Base,
  Title,
  Block,
  Notes,
} from './styles';


const FormBlock:React.FunctionComponent<IFormBlockProps> = props => {
  return(
    <Base direction={props.direction}>
      <Title><span>{props.title}</span></Title>
      <Block>
        {props.children && props.children}
      </Block>
      <Notes>

      </Notes>
    </Base>
  )
}

export default FormBlock;