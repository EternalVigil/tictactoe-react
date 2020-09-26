export const generateBoard = (boardSize) => {
	const boardArray = [];
	
	for(let i = 0; i < boardSize; i++) {
		const rowArray = [];
		for(let j = 0; j < boardSize; j++) {
			rowArray.push({x: i, y: j, state: ''});
		}
		boardArray.push(rowArray);
	}

	return boardArray;
};
