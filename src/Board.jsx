import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { generateBoard } from './helpers/board';
import { checkForWin } from './helpers/gameActions'

import Row from './Row';
import Cell from './Cell';

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30vw;
	height: 30vw;
	color: white;
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid red;

	.gameState {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0;
		width: 100%;
		text-transform: uppercase;
	}

	.gameReset {
		position: absolute;
		z-index: 10;
	}


`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 0;
	width: auto;
	text-transform: uppercase;
	margin: auto;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0;
		height: auto;
		padding: 4px 8px;
		border-radius: 23px;
		border: 2px solid white;
		background-color: black;
		cursor: pointer;
		transition: all 0.5s;

		:hover {
			transform: scale(1.2);
		}

		:active {
			transform: scale(0.9);
		}
	}
`;

const Board = () => {
	const [gameStatus, updateGameStatus] = useState({winner: '', gameOver: false});
	const [boardSize, updateBoardSize] = useState(3);
	const [board, updateBoard] = useState( generateBoard(boardSize) );
	const [playerTurn, updatePlayerTurn] = useState('player 1');

	useEffect(() => {
		const result = checkForWin(board);

		if(result !== '') {
			updateGameStatus({ winner: result, gameOver: true });
		}

	}, [playerTurn]);

	const resetGame = () => {
		updateGameStatus({winner: '', gameOver: false});
		updateBoard( generateBoard(boardSize) );
		updatePlayerTurn('player 1');
	};

	return(
		<Container>
			<div className='gameState'>
			{ gameStatus.winner ? `${gameStatus.winner} WINS` : `${playerTurn}'s turn` }
			</div>
			{
				board.map((row, rowIndex) => {
					return(
						<Row 
							key={rowIndex} 
							rowIndex={rowIndex} 
							rowData={board[rowIndex]} 
							cellArray={row}
							board={board}
							updateBoard={updateBoard}
							updatePlayerTurn={updatePlayerTurn}
							currentPlayer={playerTurn}
							gameStatus={gameStatus.gameOver}
						/>
					);
				})
			}
			{
				gameStatus.gameOver === true &&
				<div className='gameReset'>
					<ButtonContainer>
						<div onClick={resetGame.bind(null)}>
							RESET
						</div>
					</ButtonContainer>
				</div>
			}
			<div className=''>
			</div>
		</Container>
	);
};

export default Board;
