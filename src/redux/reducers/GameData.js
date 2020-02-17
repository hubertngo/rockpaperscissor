/*--------------------------------------------------------
 * Author  Ngô An Ninh
 * Email ductienas@gmail.com
 * Phone 83058687
 *
 * Created: 2019-01-30 15:04:02
 *-------------------------------------------------------*/
import { fromJS } from 'immutable';
import { MODEL_NAME } from 'src/redux/actions/GamePlay';

export const initialState = fromJS({
	player1: {
		selectedItem: 'ROCK',
	},
	player2: {
		selectedItem: 'PAPER',
	},
	mode: '',
	state: 'SelectMode',
});

export default (state = initialState, action) => {
	switch (action.type) {
		case `${MODEL_NAME}_SELECT_MODE`:
			return state.update('mode', () => {
				return action.payload;
			});
		case `${MODEL_NAME}_PLAYER1_SELECT_ITEM`:
			return state.update('player1', () => {
				return {
					selectedItem: action.payload,
				};
			});
		case `${MODEL_NAME}_PLAYER2_SELECT_ITEM`:
			return state.update('player2', () => {
				return {
					selectedItem: action.payload,
				};
			});
		case `${MODEL_NAME}_SET_GAME_STATE`:
			return state.update('state', () => {
				return action.payload;
			});
		default:
			return state;
	}
};
