import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

export const SavedStringsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AddStringBox = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, .4);
    border-radius: 5px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    width: 100%;
    input {
        border: none;
        width: 100%;
    }
`;

export const AddButton = styled.div`
    margin-left: 5px;
    border-radius: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

export const StringOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

