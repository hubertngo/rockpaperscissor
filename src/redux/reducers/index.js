/* --------------------------------------------------------
* Author  Ngô An Ninh
* Email ductienas@gmail.com
* Phone 83058687
*
* Created: 2017-12-16 00:42:57
*------------------------------------------------------- */
import auth, { initialState as initialAuth } from './auth';
import loader, { initialState as initialLoader } from './loader';

import example, { initialState as initialExample } from './example';
import GameData, { initialState as initialGameData } from './GameData';

export const initialState = {
	auth: initialAuth,
	loader: initialLoader,
	GameData: initialGameData,

	example: initialExample,
};

export default {
	auth,
	loader,
	GameData,

	example,
};
