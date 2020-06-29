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

const QuestionWithOneAns = (props) => {
    const { globalState, dispatch } = useContext(store);
    const { radioState } = globalState;

    const handleChange = ({ target }) => {
        dispatch({
            type: 'CHANGE_RADIO',
            payload: target.value
        })
    }
    
    return (
        <Question>
            <h4>{props.name}</h4>
            {
                props.opt.map((elem) => {
                    
                    return (
                        <QuestionContent key={uuidv4()} htmlFor={`quest${elem}`}>
                            <input 
                                type='radio'  
                                name='radio'
                                value={elem}
                                id={`quest${elem}`}
                                onChange={(e) => handleChange(e)}
                                checked={String(elem) === radioState}
                            />
                            {elem}
                        </QuestionContent>
                    )
                })
            }
        </Question>
    )
}

export default QuestionWithOneAns;