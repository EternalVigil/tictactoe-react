import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';

const Container = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	border: 1px solid blue;
`;

const Row = ({ rowIndex, rowData, cellArray, board, updateBoard, currentPlayer, updatePlayerTurn, gameStatus }) => {
	return(
		<Container>
			{
				cellArray.map((cell, cellIndex) => {
					return(
						<Cell 
							key={`${rowIndex}-${cellIndex}`} 
							cellData={cell} 
							cellIndex={cellIndex}
							board={board}
							updateBoard={updateBoard}
							updatePlayerTurn={updatePlayerTurn}
							currentPlayer={ currentPlayer }
							gameStatus={gameStatus}
						>

						</Cell>
					);
				})
			}
		</Container>
	);
};

export default Row;
