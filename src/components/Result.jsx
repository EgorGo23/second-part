import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { store } from '../store';
import list from '../../questionList';
import { v4 as uuidv4 } from 'uuid';

const ResultContainer = styled.div`

`;

const Result = () => {
    const { globalState, dispatch } = useContext(store);
    const { radioState, checkBoxState } = globalState;

    
    return (
        <ResultContainer>
            <h1>Результаты</h1>

            <ol>
                {
                    list.map((element) => {
                        let res = '';
                        if (element.ans.length === 1) {
                            res = radioState === String(element.ans[0]) ? 'Верно' : 'Неверно';
                        } else if (element.ans.length >= 1) {
                            const userAns = Object.keys(checkBoxState);

                            if (userAns > 2) {
                                res = 'Неверно';
                            } else {
                                res = 'Верно';
                                userAns.forEach((item) => {
                                    if (!element.ans.includes(item)) {
                                        res = 'Неверно';
                                    }
                                })
                            }

                            
                        }

                        
                        return (
                            <li key={uuidv4()} >{res}</li>
                        )
                    })
                }
            </ol>
        </ResultContainer>
    )
}

export default Result;