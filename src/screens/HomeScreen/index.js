import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	StyleSheet,
	ImageBackground,
} from 'react-native';
import SelectModeScreen from './components/SelectMode';
import StartGameScreen from './components/StartGame';
import ViewResultScreen from './components/ViewResult';

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		}, dispatch),
	};
};

const HomeScreen = (props) => {
	const { store: { GameData } } = props;

	return (
		<ImageBackground style={styles.container} source={require('src/assets/images/background.png')}>
			{GameData.state === 'SelectMode' &&
				<SelectModeScreen />
			}
			{GameData.state === 'StartGame' &&
				<StartGameScreen />
			}
			{GameData.state === 'ViewResult' &&
				<ViewResultScreen />
			}
		</ImageBackground>
	);
};

HomeScreen.navigationOptions = {
	header: null,
	tabNavigator: null,
};

HomeScreen.propTypes = {
	// store
	store: PropTypes.shape({
		GameData: PropTypes.object.isRequired,
	}).isRequired,
	// action
	action: PropTypes.shape({
		// CreateTakeTicket: PropTypes.func.isRequired,
	}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
