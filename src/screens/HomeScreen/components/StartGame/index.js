/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone (+65) 8305 8687
*
* Created: 2020-02-13 17:44:07
*------------------------------------------------------- */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, Segment } from 'native-base';
import CountdownCircleTimer from 'react-native-countdown-circle';
import { getRandomInt } from 'src/utils/index';
import * as GamePlay from 'src/redux/actions/GamePlay';
import MainButton from 'src/components/MainButton';

const IMG_ROCK = require('src/assets/images/ROCK.png');
const IMG_SCISSOR = require('src/assets/images/SCISSOR.png');
const IMG_PAPER = require('src/assets/images/PAPER.png');


const acceptedValues = ['ROCK', 'PAPER', 'SCISSOR'];
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttonStyle: {
		width: 120,
		height: 100,
		justifyContent: 'center',
	},
	topPart: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomPart: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'transparent',
	},
	stretch: {
		resizeMode: 'contain',
		height: 90,
		width: 120,
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
			player1Selection: GamePlay.player1Selection,
			player2Selection: GamePlay.player2Selection,
			setGameState: GamePlay.setGameState,
		}, dispatch),
	};
};

const StartGameScreen = (props) => {
	const { action: { player1Selection, player2Selection, setGameState }, store: { GameData } } = props;
	const [isStarted, setIsStarted] = useState(false);
	const [selectedItem, setSelectedItem] = useState('ROCK');
	const handleStartGame = () => {
		player2Selection(acceptedValues[getRandomInt(0, 2)]);
		if (GameData.mode === 'CvsC') {
			player1Selection(acceptedValues[getRandomInt(0, 2)]);
		} else {
			player1Selection(selectedItem);
		}
		setGameState('ViewResult');
	};

	return (
		<View style={styles.container}>
			<View style={styles.topPart}>
				{isStarted &&
					<CountdownCircleTimer
						seconds={3}
						radius={30}
						borderWidth={8}
						color="#ff003f"
						bgColor="#fff"
						textStyle={{ fontSize: 20 }}
						onTimeElapsed={() => handleStartGame()}
					/>
				}
				{!isStarted &&
					<MainButton onPress={() => setIsStarted(true)} Title="Play" />
				}
			</View>
			{GameData.mode === 'PvsC' &&
				<View style={styles.bottomPart}>
					{acceptedValues.map((item, i) => (
						<Button
							key={item}
							rounded
							style={{ ...styles.buttonStyle, backgroundColor: item === selectedItem ? '#5FCE35' : '#fff' }}
							onPress={() => setSelectedItem(item)}
						>
							<Image style={styles.stretch} source={eval(`IMG_${item}`)} />
						</Button>
					))}
				</View>
			}
		</View>
	);
};

StartGameScreen.propTypes = {
	store: PropTypes.shape({
		GameData: PropTypes.object.isRequired,
	}).isRequired,
	// action
	action: PropTypes.shape({
		player1Selection: PropTypes.func.isRequired,
		player2Selection: PropTypes.func.isRequired,
		setGameState: PropTypes.func.isRequired,
	}).isRequired,
};

StartGameScreen.defaultProps = {
	// prop: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGameScreen);
