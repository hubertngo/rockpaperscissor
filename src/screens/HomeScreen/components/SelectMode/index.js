/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone (+65) 8305 8687
*
* Created: 2020-02-13 17:44:07
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import * as GamePlay from 'src/redux/actions/GamePlay';
import MainButton from 'src/components/MainButton';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	topPart: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomPart: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonStyle: {
		justifyContent: 'center',
	},
});

const mapStateToProps = (state) => {
	return {
		store: {

		},
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators({
			setGameState: GamePlay.setGameState,
			selectMode: GamePlay.selectMode,
		}, dispatch),
	};
};

const SelectModeScreen = (props) => {
	const { action: { setGameState, selectMode } } = props;
	const handleSelectMode = (mode) => {
		selectMode(mode);
		setGameState('StartGame');
	};

	return (
		<View style={styles.container}>
			<View style={styles.topPart}>
				<Image style={{ resizeMode: 'contain', width: 200 }} source={require('src/assets/images/PinClipart.com_rock-paper-scissors-clipart_4926824.png')} />
			</View>
			<View style={styles.bottomPart}>
				<View style={{ justifyContent: 'space-around', height: 250 }}>
					<MainButton width={300} height={120} onPress={() => handleSelectMode('PvsC')} Title="Player vs Computer" />
					<MainButton width={300} height={120} onPress={() => handleSelectMode('CvsC')} Title="Computer vs Computer" />
				</View>
			</View>
		</View>
	);
};

SelectModeScreen.propTypes = {
	store: PropTypes.shape({
		// taketicket: PropTypes.object.isRequired,
	}).isRequired,
	// action
	action: PropTypes.shape({
		selectMode: PropTypes.func.isRequired,
		setGameState: PropTypes.func.isRequired,
	}).isRequired,
};

SelectModeScreen.defaultProps = {
	// prop: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectModeScreen);
