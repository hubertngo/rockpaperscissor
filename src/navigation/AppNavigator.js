// import React from 'react';
/* --------------------------------------------------------
* Author  Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone 83058687
*
* Created: 2019-09-04 10:27:03
*------------------------------------------------------- */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
	createSwitchNavigator({
		// You could add another route here for authentication.
		// Read more at https://reactnavigation.org/docs/en/auth-flow.html
		Main: MainTabNavigator,
	}),
);
