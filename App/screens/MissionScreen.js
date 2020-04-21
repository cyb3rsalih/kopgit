import React, { useEffect } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import { MissionCard } from '../components/cards';
import { MainCard } from '../components/cards';
import { setMission, loading, missionsData } from '../redux/actions/dataAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MissionsData } from '../data/missionsData';

const MainScreen = (props) => {
	useEffect(() => {
		missionsData(MissionsData);
		console.log(props);
	}, []);
	const missionHandler = (id) => {
		setMission(id);
	};

	// const card = missions.map((item, i) => {
	// 	return (
	// 		<MissionCard
	// 			title={item.title}
	// 			containerBackground={item.isActive ? '#ddd' : ''}
	// 			backgroundColor={item.color}
	// 			key={item.id}
	// 			onPress={() => missionHandler(item.id)}
	// 		/>
	// 	);
	// });
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
			<View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={16}
					contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
				>
					{/* {card} */}
				</ScrollView>
			</View>
			<View style={{ flex: 0.7 }}>
				<ScrollView showsVerticalScrollIndicator={false} />
			</View>
		</View>
	);
};
const mapStateToProps = (state) => {
	return { ...state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setMission: bindActionCreators(setMission, dispatch),
		loading,
		missionsData
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
