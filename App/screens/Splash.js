import React, { useEffect } from 'react';
import { View,Text } from 'react-native';
import Loading from '../components/Loading';
import AsyncStorage from '@react-native-community/async-storage'
import {connect} from 'react-redux'

import {isReady,setUserToken,setUserProfileInfo} from '../redux/actions/dataAction'

const ScreenContainer = ({ children }) => <View style={{ flex: 1 }}>{children}</View>;

Splash = (props) => {

	let _retrieveData = () => {
		
		AsyncStorage.getItem("INFO",(err,result) => {
			// RESULT IS NOT THE VALUE SAVED!!!!!
			// IT IS JUST FOR CHECK WHETHER VALUE EXIST 
 			if(result == null){
				console.log("No Info")
			}else{
				console.log("Info Found!")
			}
		}).then((info) => {
		
			if(info != null){
				console.log(`Token will send to redux: ${info}`)
				props.dispatch(setUserProfileInfo(JSON.parse(info)))
			}
		})
		.then(() => {

			AsyncStorage.getItem("TOKEN",(err,result) => {
				// RESULT IS NOT THE VALUE SAVED!!!!!
				// IT IS JUST FOR CHECK WHETHER VALUE EXIST 
				 if(result == null){
					console.log("Token yok, ilk kez geliyor. Login ekranına alalım.")
					props.dispatch(isReady(true))
				}else{
					console.log("Token var, daha önce giriş yapmış. Tokeni yerine koy.")
				}
			}).then((token) => {
	
				if(token != null){
					console.log(`Token will send to redux: ${token}`)
					props.dispatch(setUserToken(token))
				}
				
			})
		})



		
	};
	

	React.useEffect(_retrieveData,[])

	return (
		<ScreenContainer>
			<Loading />
		</ScreenContainer>
	)
		
};

mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps)(Splash)
