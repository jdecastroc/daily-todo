import React from 'react';
import {
    Container,
    SavedStringsContainer,
    StringOption,
    AddStringBox,
    AddButton,
} from './styles';
import { IInputArrayStringsProps } from '../../../common/types';

const InputArrayStrings:React.FunctionComponent<IInputArrayStringsProps> = props => {

    const [strings, setStrings] = React.useState(props.defaultStrings || []);

    const [editingString, setEditingString] = React.useState('');

    const handleChange = (event:any) => setEditingString(event.target.value);

    const handleSave = () => {
        if ((!editingString || editingString.trim().length <= 0) && strings.length < props.maxLength) return null;
        const newStrings = [...strings];
        newStrings.push(editingString.trim());
        props.handleChange(newStrings);
        setEditingString('');
    }

    const handleRemove = (index:number) => {
        const newStrings = [...strings];
        newStrings.splice(index, 1);
        props.handleChange(newStrings);
    }

    React.useEffect(() => {
        if (props.strings !== strings) {
            setStrings(props.strings);
        }
    });
    
    return(
        <Container>
            <SavedStringsContainer>
                {
                    strings.map((string, index) => (
                        <StringOption key={`string-list-num-${index}`}>
                            <span>• {string}</span>
                            <AddButton 
                                onClick={() => handleRemove(index)}
                            >
                                <i className="fas fa-minus"></i>
                            </AddButton>
                        </StringOption>
                    ))
                }
            </SavedStringsContainer>
            {
                strings.length < props.maxLength &&
                <AddStringBox>
                    <input
                        type="text"
                        name="string"
                        onChange={handleChange}
                        value={editingString}
                    />
                    <AddButton onClick={handleSave}><i className="fas fa-plus"></i></AddButton>
                </AddStringBox>
            }
        </Container>
    )
}

export default InputArrayStrings;