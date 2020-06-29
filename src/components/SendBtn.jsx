import React, { useState, useEffect, useContext } from 'react';
import { store } from '../store';
import styled from 'styled-components';

const Send = styled.button`
    &:disabled {
        opacity: 0.5
    }
`; 

const SendBtn = () => {
    const { globalState, dispatch } = useContext(store);
    const { radioState, checkBoxState } = globalState;


    return (
        <Send 
            type="submit"
            disabled={Object.values(checkBoxState).length < 2 || !radioState}
        >
            Отправить
        </Send>
    )
}

export default SendBtn;