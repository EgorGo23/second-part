import React, { useState, useEffect, useContext } from 'react';
import { store } from '../store';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Question = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-bottom: 20px;
`;

const QuestionContent = styled.label`
    margin-bottom: 5px;

    input {
        margin-right: 10px;
    }
`;

const QuestionWithMultipleAns = (props) => {
    const { globalState, dispatch } = useContext(store);
    const { checkBoxState } = globalState;
    
    const handleChange = ({ target }) => {
        dispatch({ type: 'CHANGE_CHECKBOX', payload: target.value})
    }

    return (
        <Question key={uuidv4()}>
            <h4>{props.name}</h4>
            {
                props.opt.map((elem) => (
                    <QuestionContent key={uuidv4()} htmlFor={`quest${elem}`}>
                            <input 
                                type='checkbox'  
                                name='checkbox' 
                                value={elem}
                                id={`quest${elem}`}
                                onChange={(e) => handleChange(e)}
                                checked={checkBoxState[elem]}
                            />
                            {elem}
                    </QuestionContent>
                ))
            }
        </Question>
    )
}


export default QuestionWithMultipleAns;