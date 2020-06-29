import React, { useContext, useState } from 'react';
import { store } from '../store';
import styled from 'styled-components';
import QuestionList from './QuestionList';
import Result from './Result';



const AppContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-flow: column;
`;

const App = () => {
    const { globalState } = useContext(store);
    const {
        isResult
    } = globalState;



    return (
        <AppContainer>
            {
                !isResult && (
                    <QuestionList />
                )
            }
            {
                isResult && (
                    <Result />
                )
            }
        </AppContainer>
    )
}

export default App;