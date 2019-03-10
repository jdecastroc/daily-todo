import React from 'react';
import { Base, InputBlock, SubmitButtonContainer } from './styles';
import { ISummaryFormValues } from '../../../../common/types';
import FormBlock from '../../../FormComponents/FormBlock';
import InputArrayStrings from '../../../FormComponents/InputArrayStrings';
import CheckBox from '../../../FormComponents/CheckBox';
import NumberBox from '../../../FormComponents/NumberBox';

const SummaryForm = () => {

  const initialFormValues = {
    objective: '',
    oportunities: [],
    gratitudeList: [],
    clearGoalsCheck: false,
    meaningfulProgressCheck: false,
    improveRelationshipsCheck: false,
    foundEnthusiasmCheck: false,
    happyScore: 0,
    isSubmitting: false,
  }

  const [values, setValues] = React.useState<ISummaryFormValues>(initialFormValues);

  const [errors, setErrors] = React.useState({});

  const handleSubmit = async (event:any) => {
      setValues({...values, isSubmitting: true});
      event.preventDefault();
      if (isValidForm()) {
          // const formInfo = {...values};
          // formInfo.eventStarts = moment(formInfo.eventStarts).toISOString();
          // formInfo.eventEnds = moment(formInfo.eventEnds).toISOString();
          // formInfo.description = formInfo.description ? stateToHTML(formInfo.description.getCurrentContent()) : '';
          // props.onSubmit(formInfo);
      }
      window.scrollTo(0, 0);
      setValues({...values, isSubmitting: false});
  }

  const isValidForm = () => true;

  const syntheticEventHandlers = ['objective'];

  const handleChange = (formBlockId:string, event: any) => {
      const newState:ISummaryFormValues = {...values};
      if (!syntheticEventHandlers.includes(formBlockId)) {
          newState[formBlockId] = event;
      } else {
          newState[formBlockId] = event.target.value;
      }
      setValues(newState);
  }

  return(
    <Base>
      <form onSubmit={handleSubmit}>
        <FormBlock 
          title='Objetivo' 
          notes='Esto es tu objetivo diario'
          direction='column'
        >
          <InputBlock>
          <input
            type="text"
            name="objective"
            onChange={event => handleChange('objective', event)}
            value={values.objective || ''}
          />
          </InputBlock>
        </FormBlock>
        <FormBlock 
          title='Oportunidades' 
          notes='Esto es tu objetivo diario'
          direction='column'
        >
          <InputArrayStrings
              defaultStrings={[]}
              maxLength={3}
              strings={values.oportunities}
              handleChange={(stringArray:Array<string>) => handleChange('oportunities', stringArray)}                                    
          />
        </FormBlock>
        <FormBlock 
          title='Agradecimientos'
          notes='Esto es tu objetivo diario'
          direction='column'
        >
          <InputArrayStrings
              defaultStrings={[]}
              maxLength={3}
              strings={values.gratitudeList}
              handleChange={(stringArray:Array<string>) => handleChange('gratitudeList', stringArray)}                                    
          />
        </FormBlock>
        <FormBlock 
          title='Goals cleared' 
          notes='Esto es tu objetivo diario'
          direction='row'
        >
          <CheckBox
              identifier={'clearGoalsCheck'}
              isLoading={false}
              value={values.clearGoalsCheck}
              handleChange={(identifier:string, value:Boolean) => handleChange(identifier, value)}
          />
        </FormBlock>
        <FormBlock 
          title='Meaningful progress' 
          notes='Has tenido un avance importante?'
          direction='row'
        >
          <CheckBox
              identifier={'meaningfulProgressCheck'}
              isLoading={false}
              value={values.meaningfulProgressCheck}
              handleChange={(identifier:string, value:Boolean) => handleChange(identifier, value)}
          />
        </FormBlock>
        <FormBlock 
          title='Has mejorado las relaciones' 
          notes='Has mejorado las relaciones'
          direction='row'
        >
          <CheckBox
              identifier={'improveRelationshipsCheck'}
              isLoading={false}
              value={values.improveRelationshipsCheck}
              handleChange={(identifier:string, value:Boolean) => handleChange(identifier, value)}
          />
        </FormBlock>
        <FormBlock 
          title='Has encontrado entusiasmo en lo que has hecho' 
          notes='Esto es tu objetivo diario'
          direction='row'
        >
          <CheckBox
              identifier={'foundEnthusiasmCheck'}
              isLoading={false}
              value={values.foundEnthusiasmCheck}
              handleChange={(identifier:string, value:Boolean) => handleChange(identifier, value)}
          />
        </FormBlock>
        <FormBlock 
          title='Nota de felicidad' 
          notes='Esto es tu objetivo diario'
          direction='row'
        >
          <NumberBox
            initialValue={6}
            onChange={(value:number) => handleChange('happyScore', value)}
            maxValue={10}
            minValue={1}
          />
        </FormBlock>
        <SubmitButtonContainer>
          <button>Save Day Information</button>
        </SubmitButtonContainer>
      </form>
    </Base>
  )
}

export default SummaryForm;