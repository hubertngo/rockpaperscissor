/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone (+65) 8305 8687
*
* Created: 2020-02-13 17:29:09
*------------------------------------------------------- */

export const MODEL_NAME = 'GAME_PLAY';

export function selectMode(mode) {
	return {
		type: `${MODEL_NAME}_SELECT_MODE`,
		payload: mode,
	};
}

export function setGameState(state) {
	return {
		type: `${MODEL_NAME}_SET_GAME_STATE`,
		payload: state,
	};
}

export function player1Selection(item) {
	return {
		type: `${MODEL_NAME}_PLAYER1_SELECT_ITEM`,
		payload: item,
	};
}


export function player2Selection(item) {
	return {
		type: `${MODEL_NAME}_PLAYER2_SELECT_ITEM`,
		payload: item,
	};
}
