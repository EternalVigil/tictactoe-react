import React from 'react';
import styled from 'styled-components';

import { playerTurn } from './helpers/playerActions';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	height: 100%;
	cursor: ${props => props.isAvailable ? 'pointer' : 'not-allowed'};
	border: 1px solid green;
`;

const Cell = ({ cellData, cellIndex, board, updateBoard, currentPlayer, updatePlayerTurn, gameStatus }) => {
	return(
		<Container
			isAvailable={ (board[cellData.x][cellData.y].state === '' && gameStatus !== true) } 
			onClick={ playerTurn.bind(null, cellData.x, cellData.y, board, updateBoard, currentPlayer, updatePlayerTurn, gameStatus) }
		>
			<div>
				{cellData.state}
			</div>
			<div>
				{/* `${cellData.x} - ${cellData.y}` */}
			</div>
		</Container>
	);

};

export default Cell;
