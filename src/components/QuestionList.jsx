import React, { useState, useEffect, useContext } from 'react';
import { store } from '../store';
import styled from 'styled-components';
import list from '../../questionList';
import { v4 as uuidv4 } from 'uuid';
import SendBtn from './SendBtn';
import QuestionWithMultipleAns from './QuestionWithMultipleAns';
import QuestionWithOneAns from './QuestionWithOneAns';

const QuestionListContainer = styled.form`
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    user-select: none;

    h4 {
        margin: 0;
        margin-bottom: 5px;
    }

    button {
        margin-top: 20px;
    }
`;

const QuestionList = () => {
    const { globalState, dispatch } = useContext(store);
    const { buttonClick } = globalState;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SUBMIT' })
    }

    return (
        <>
            <h1>Список вопросов</h1>
            <QuestionListContainer onSubmit={(e) => handleSubmit(e)}>
                {
                    list.map(({question, options, ans}) => {
                        return (
                            <div key={uuidv4()}>
                                {
                                    ans.length === 1 ? 
                                    (
                                        <QuestionWithOneAns name={question} opt={options} ans={ans} />
                                    ) :
                                    (
                                        <QuestionWithMultipleAns name={question} opt={options} ans={ans} />
                                    )
                                }
                            </div>
                        )
                    })
                }

                <SendBtn  />
            </QuestionListContainer>
        </>
    )
}

export default QuestionList;