import React from 'react';
import { FaCheck, FaSpinner } from 'react-icons/fa';
import { ICheckBoxProps } from '../../../common/types';
import {
  Base,
  BoxContainer,
} from './styles';

const CheckBox:React.FunctionComponent<ICheckBoxProps> = props => {

  const [isLoading, setLoading] = React.useState<Boolean>(false);
  const [isChecked, setCheck] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setCheck(props.value);
  }, [props.value])

  React.useEffect(() => {
    setLoading(props.isLoading);
  }, [props.isLoading])

  return(
    <Base onClick={() => !isLoading && props.handleChange(props.identifier, !isChecked)}>
      <BoxContainer>
        {isChecked && !isLoading && <FaCheck />}
        {isLoading && <FaSpinner className="fa-spin"/>}
      </BoxContainer>
    </Base>
  )
}

export default CheckBox;