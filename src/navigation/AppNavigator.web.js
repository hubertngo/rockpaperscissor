/* --------------------------------------------------------
* Author  Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone 83058687
*
* Created: 2019-09-04 10:26:55
*------------------------------------------------------- */

import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const switchNavigator = createSwitchNavigator({
	// You could add another route here for authentication.
	// Read more at https://reactnavigation.org/docs/en/auth-flow.html
	Main: MainTabNavigator,
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
