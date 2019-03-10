import React from 'react';
import {
    Base,
    Container,
    InputContainer,
    ArrowsContainer,
    IncreaseArrow,
    DecreaseArrow,
} from './styles';
import { INumberBoxProps } from '../../../common/types';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const NumberBox:React.FunctionComponent<INumberBoxProps> = (props) => {


    const [value, setValue] = React.useState<number>(6);

    React.useEffect(() => {
        setValue(props.initialValue);
        props.onChange(value)
    },[])

    const checkMinMaxValue = (incomingValue:number, maxValue:number, minValue:number) => {
        const maxValueCheck = props.maxValue ? incomingValue <= maxValue : true;
        const minValueCheck = props.minValue ? incomingValue >= minValue : true;
        return maxValueCheck && minValueCheck;
    }

    const onUpdate = (value:number) => {
        if (checkMinMaxValue(value, props.maxValue, props.minValue)) {
            setValue(value);
            props.onChange(value);
        };
    }

    const increaseValue = (stateValue:number) => {
        const newValue = ++stateValue;
        onUpdate(newValue);
    };

    const decreaseValue = (stateValue:number) => {
        const newValue = --stateValue;
        onUpdate(newValue);
    };
    
    return(
        <Base>
            <Container>
                <InputContainer value={value}/>
                <ArrowsContainer>
                    <IncreaseArrow onClick={() => increaseValue(value)}>
                        <FaAngleUp />
                    </IncreaseArrow>
                    <DecreaseArrow onClick={() => decreaseValue(value)}>
                        <FaAngleDown />
                    </DecreaseArrow>
                </ArrowsContainer>
            </Container>
        </Base>
    );
};

export default NumberBox;