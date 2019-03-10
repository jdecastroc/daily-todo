import styled from 'styled-components';

export const Base = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-left: 10px;
`;

export const Container = styled.div`
    width: 100%;
    position: relative;
`;

export const InputContainer = styled.input`
    font-size: 12px;
    line-height: 1.4em;
    display: block;
    width: 80%;
    overflow: hidden;
    padding: 7px;
    font-weight: 700;
    border: 1px solid rgba(0,0,0,.3);
    border-radius: 5px;
    padding: 5px;
`;

export const ArrowsContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-35px,-11px);
    font-size: 22px;
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
`;

export const IncreaseArrow = styled.div`
    cursor: pointer;
    svg {
        transform: translateY(8px);
    }
`;

export const DecreaseArrow = styled.div`
    cursor: pointer;
    svg {
        transform: translateY(-8px);
    }
`;