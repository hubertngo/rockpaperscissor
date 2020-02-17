/*--------------------------------------------------------
 * Author  Ngô An Ninh
 * Email ductienas@gmail.com
 * Phone 83058687
 *
 * Created: 2017-07-20 15:58:17
 *-------------------------------------------------------*/

import { fork } from 'redux-saga/effects';

import auth from './auth';
import middleware from './middleware';

export function* startup() {
	yield console.log('Hello Redux-Saga');
}

export default function* root() {
	yield fork(startup);
	yield fork(middleware);

	// combine your saga here
	yield fork(auth);
}
