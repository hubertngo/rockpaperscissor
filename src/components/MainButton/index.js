/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone (+65) 8305 8687
*
* Created: 2020-02-14 16:33:35
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, StyleSheet } from 'react-native';

import { Button } from 'native-base';

const styles = StyleSheet.create({
	textStyle: {
		color: '#fff',
		position: 'absolute',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
});

const MainButton = (props) => {
	const { onPress, buttonStyle, width, Title, height } = props;
	const imageStyle = { resizeMode: 'contain', width };
	if (height !== 0) imageStyle.height = height;

	return (
		<Button onPress={onPress} transparent style={buttonStyle}>
			<Image style={imageStyle} source={require('src/assets/images/buttons-game-png-13-transparent.png')} />
			<Text style={{ ...styles.textStyle, width }}>{Title}</Text>
		</Button>
	);
};

MainButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	buttonStyle: PropTypes.object,
	width: PropTypes.number,
	height: PropTypes.number,
	Title: PropTypes.string.isRequired,
};

MainButton.defaultProps = {
	buttonStyle: {
	},
	width: 200,
	height: 0,
};

export default MainButton;
