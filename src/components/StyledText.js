/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* --------------------------------------------------------
* Author  Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone 83058687
*
* Created: 2019-09-04 10:29:15
*------------------------------------------------------- */
import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
	return (
		<Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
	);
}
