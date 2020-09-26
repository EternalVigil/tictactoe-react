export const checkForWin = (board) => {
	let winner = '';

	const rowsWin = checkRows(board);
	if(rowsWin !== '') {
		return rowsWin;
	}

	const columnsWin = checkColumns(board);
	if(columnsWin !== '') {
		return columnsWin;
	}

	const diagonalWin = checkDiagonals(board);
	if(diagonalWin !== '') {
		return diagonalWin;
	}

	return winner;
};

export const checkRows = (board) => {
	let winner = '';

	for(let i = 0; i < board.length; i++) {

		const rowWin = checkRow(board[i]);
		if(rowWin !== '') {
			winner = rowWin;
			break;
		}

	}
	return winner;
};

export const checkColumns = (board) => {
	let winner = '';

	for(let i = 0; i < board.length; i++) {
		const columnWin = checkColumn(board, i);

		if(columnWin !== '') {
			winner = columnWin;
			break;
		}
	}

	return winner;
};

export const checkDiagonals = (board) => {
	let winner = '';

	const fallingLeft = checkDiagonalTopLeft(board);
	const fallingRight = checkDiagonalTopRight(board);

	if(fallingLeft !== '' || fallingRight !== '') {
		winner = fallingLeft || fallingRight;
	}

	return winner;

};

export const checkRow = (row) => {
	const symbolCount = {};
	let winner = '';

	for(let i = 0; i < row.length; i++) {
		if(row[i].state !== '') {
			if(!symbolCount[row[i].state] ) {
				symbolCount[ row[i].state ] = 1;
			} else {
				symbolCount[ row[i].state ] = symbolCount[ row[i].state ] + 1;
			}
		}
	}

	Object.entries(symbolCount).forEach(entry => {
		if(entry[1] === row.length) {
			winner = `${entry[0]}`;
		}
	});

	return winner;
};

export const checkColumn = (board, columnIndex) => {
	const symbolCount = {};
	let winner = '';

	for(let i = 0; i < board.length; i++) {

		if(board[i][columnIndex].state !== '') {
			if(!symbolCount[ board[i][columnIndex].state ]) {
				symbolCount[ board[i][columnIndex].state ] = 1;
			} else {
				symbolCount[ board[i][columnIndex].state ] = symbolCount[ board[i][columnIndex].state ] + 1;
			}
		}
	}
	Object.entries(symbolCount).forEach(entry => {
		if(entry[1] === board.length) {
			winner = `${entry[0]}`;
		}
	});

	return winner;
};

export const checkDiagonalTopLeft = (board) => {
	let winner = '';
	const symbolCount = {};

	for(let i = 0; i < board.length; i++) {
		if(board[i][i].state !== '') {
			if(!symbolCount[ board[i][i].state ]) {
				symbolCount[ board[i][i].state ] = 1;
			} else {
				symbolCount[ board[i][i].state ] = symbolCount[ board[i][i].state ] + 1;
			}
		}
	}

	Object.entries(symbolCount).forEach(entry => {
		if(entry[1] === board.length) {
			winner = `${entry[0]}`;
		}
	});

	return winner;
};

export const checkDiagonalTopRight = (board) => {
	let winner = '';
	const symbolCount = {};

	for(let i = 0; i < board.length; i++) {
		if( board[i][(board.length - 1) - i].state !== '') {
			if(!symbolCount[ board[i][(board.length - 1) - i].state ]) {
				symbolCount[ board[i][(board.length - 1) - i].state ] = 1;
			} else {
				symbolCount[ board[i][(board.length - 1) - i].state ] = symbolCount[ board[i][(board.length - 1) - i].state ] + 1;
			}
		}
	}

	Object.entries(symbolCount).forEach(entry => {
		if(entry[1] === board.length) {
			winner = `${entry[0]}`;
		}
	});

	return winner;
};
