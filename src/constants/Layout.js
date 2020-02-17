/* --------------------------------------------------------
* Author  Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone 83058687
*
* Created: 2019-09-04 10:28:47
*------------------------------------------------------- */


import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default {
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
};
