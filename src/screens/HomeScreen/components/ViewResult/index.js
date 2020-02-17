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
import { Badge } from 'native-base';
import { setGameState } from 'src/redux/actions/GamePlay';
import MainButton from 'src/components/MainButton';
import * as Animatable from 'react-native-animatable';

const ROCK_LEFT = require('src/assets/images/ROCK_LEFT.png');
const ROCK_RIGHT = require('src/assets/images/ROCK_RIGHT.png');
const PAPER_LEFT = require('src/assets/images/PAPER_LEFT.png');
const PAPER_RIGHT = require('src/assets/images/PAPER_RIGHT.png');
const SCISSOR_LEFT = require('src/assets/images/SCISSOR_LEFT.png');
const SCISSOR_RIGHT = require('src/assets/images/SCISSOR_RIGHT.png');

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bottomPart: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	topPart: {
		flex: 2,
		// justifyContent: 'center',
		// alignItems: 'center',
		// flexDirection: 'row',
	},
	textStyle: {
		color: '#fff',
		position: 'absolute',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20,
		width: 200,
	},
});

const mapStateToProps = (state) => {
	return {
		store: {
			GameData: state.GameData.toJS(),
		},
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		action: bindActionCreators({
			setGameState,
		}, dispatch),
	};
};

const ViewResultScreen = (props) => {
	const { store: { GameData } } = props;
	const WinnerLogic = (item1, item2) => {
		const WinSet = {
			'SCISSOR_PAPER': true,
			'ROCK_SCISSOR': true,
			'PAPER_ROCK': true,
		};

		if (item1 === item2) return 'DRAW';
		if (WinSet[`${item1}_${item2}`]) return 'WIN';
		return 'LOSE';
	};

	const returnWinner = () => {
		switch (WinnerLogic(GameData.player1.selectedItem, GameData.player2.selectedItem)) {
			case 'WIN':
				return GameData.mode === 'PvsC' ? 'You win!' : 'Winner: Player 1';
			case 'DRAW':
				return 'DRAW';
			default:
				return GameData.mode === 'PvsC' ? 'You lose!' : 'Winner: Player 2';
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.topPart}>
				<View style={{ flex: 1 }} />
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<View style={{ flex: 2, justifyContent: 'center' }}>
						<Animatable.View animation="fadeInLeft" duration={1000}>
							<Text style={{ marginLeft: 60, fontWeight: 'bold', color: 'green' }}>{GameData.mode === 'PvsC' ? 'You ' : 'Player 1'}</Text>
							<Image source={eval(`${GameData.player1.selectedItem}_LEFT`)} style={{ resizeMode: 'contain', width: 100, height: 100, marginLeft: 30 }} />
						</Animatable.View>
					</View>
					<View style={{ flex: 1 }} />
					<View style={{ flex: 2, justifyContent: 'center' }}>
						<Animatable.View animation="fadeInRight" duration={1000}>
							<Text style={{ marginLeft: 30, fontWeight: 'bold', color: 'red' }}>Player 2</Text>
							<Image source={eval(`${GameData.player2.selectedItem}_RIGHT`)} style={{ resizeMode: 'contain', width: 100, height: 100, alignSelf: 'flex-end', marginRight: 30 }} />
						</Animatable.View>
					</View>
				</View>
				<View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
					<Animatable.View animation="zoomIn" delay={1000} style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Image style={{ resizeMode: 'contain', width: 300 }} source={require('src/assets/images/IMGBIN_game-buttons-png_dnCerzkr.png')} />
						<Text style={styles.textStyle}>{returnWinner()}</Text>
					</Animatable.View>
				</View>
			</View>
			<View style={styles.bottomPart}>
				<MainButton Title="Quit" onPress={() => props.action.setGameState('SelectMode')} />
				<MainButton Title="Replay" onPress={() => props.action.setGameState('StartGame')} />
			</View>
		</View>
	);
};

ViewResultScreen.propTypes = {
	store: PropTypes.shape({
		GameData: PropTypes.object.isRequired,
	}).isRequired,
	// action
	action: PropTypes.shape({
		setGameState: PropTypes.func.isRequired,
	}).isRequired,
};

ViewResultScreen.defaultProps = {
	// prop: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewResultScreen);
