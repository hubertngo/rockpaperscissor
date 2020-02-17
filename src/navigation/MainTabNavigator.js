/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author  Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone 83058687
*
* Created: 2019-09-04 10:26:38
*------------------------------------------------------- */
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from 'src/components/TabBarIcon';

import HomeScreen from 'src/screens/HomeScreen';
import LinksScreen from 'src/screens/LinksScreen';
import SettingsScreen from 'src/screens/SettingsScreen';

const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {},
});

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	config,
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => {
		return (<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios'
				? `ios-information-circle${focused ? '' : '-outline'}`
				: 'md-information-circle'}
		/>);
	},
	tabBarVisible: false,
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
	{
		Links: LinksScreen,
	},
	config,
);

LinksStack.navigationOptions = {
	tabBarLabel: 'Links',
	tabBarIcon: ({ focused }) => {
		return (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />);
	},
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen,
	},
	config,
);

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => {
		return (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />);
	},
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	LinksStack,
	SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
