import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import Board from './Board';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #181818;
`;

const App = () => {
  return (
    <Container>
      <Board />
    </Container>
  );
}

export default App;
