export const playerTurn = (xCoord, yCoord, board, updateBoard, currentPlayer, updatePlayerTurn, gameStatus) => {
	if(gameStatus !== true) { 
		if(currentPlayer === 'player 1') {
			if(board[xCoord][yCoord].state === '') {

				updateBoard((previousState) => {
					previousState[xCoord][yCoord].state = 'X';
					return previousState;
				});

				updatePlayerTurn('player 2');
			}

		} else if (currentPlayer === 'player 2') {

			if(board[xCoord][yCoord].state === '') {
				updateBoard((previousState) => {
					previousState[xCoord][yCoord].state = 'O';
					return previousState;
				});

				updatePlayerTurn('player 1');
			}
		}
	}
};
