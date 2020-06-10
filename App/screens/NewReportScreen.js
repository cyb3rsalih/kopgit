import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Card, CardHeader, Button, Datepicker, Icon, Input, Select, Text } from '@ui-kitten/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { dataBook } from '../assets/dummyData';
import {connect} from 'react-redux'

import { addUserReport,getUserReadingReports,setRealData, setScore} from '../redux/actions/dataAction';
import AsyncStorage from '@react-native-community/async-storage';

NewReportScreen = (props) => {
	const { dispatch,navigation } = props
	const maxDate = new Date();
	const minDate = new Date(); // 1 week range
	minDate.setDate(new Date().getDate()-6);
	//* Rapor tarihini tutuyor
	const [ selectedDate, setSelectedDate ] = React.useState(new Date());
	//* Okunan kitabı tutuyor
	const [ selectBook, setSelectBook ] = React.useState(null);
	//* Sayfa sayısını tutuyor
	const [ pageCount, setPageCount ] = React.useState(null);

	//* İptal butonu fonksiyonu
	const handleCancel = () => {
		navigation.goBack();
	};



	//*Kaydet butonu fonksiyonu
	const handleSave = () => {
		let data = {
			bookId: 5,
			pageCount:parseInt(pageCount),
			date: selectedDate.toISOString(), 
			note: "",
			loggedInUserId: props.data.userInfo.id
		  }

		  try {
			
			dispatch(addUserReport(JSON.stringify(data))).then(({action,value}) => {
			alert(value.message)
			if(value.isSuccess){
				dispatch(setScore(value.currentScore))
				AsyncStorage.setItem("SCORE",value.currentScore.toString(),(error) => alert("Puan storage üzerine eklendi.") )	
			}
			
			})			
		
		} catch (e) {
			console.log(e);
		}
	};

	//* Takvim iconu
	const CalendarIcon = (style) => <Icon {...style} name="calendar" />;

	//* Card componenti Header'ı
	const Header = () => <CardHeader title="Rapor Girişi" />;

	//* Card componenti Footer'ı
	const Footer = () => (
		<View style={styles.footerContainer}>
			<Button style={styles.footerControl} size="small" status="basic" onPress={() => handleCancel()}>
				GERİ GİT
			</Button>
			<Button style={styles.footerControl} size="small" status="primary" onPress={() => handleSave()}>
				KAYDET
			</Button>
		</View>
	);
	return (
		<Layout style={styles.container}>
			<Card header={Header} footer={Footer} style={{ width: wp('100%') }}>
				<Layout>
					<Datepicker
					min={minDate}
					max={maxDate}
					placeholder="Rapor Tarihi" 
					date={selectedDate}
					onSelect={setSelectedDate} 
					icon={CalendarIcon} />
					<Select
						style={styles.select}
						data={dataBook}
						placeholder="Okunan Kitap"
						selectedOption={selectBook}
						onSelect={setSelectBook}
					/>
					<Input
						placeholder="Okunan Sayfa Sayısı"
						onChangeText={setPageCount}
						keyboardType="numeric"
						maxLength={3}
					/>
				</Layout>
			</Card>
			<Layout style={{ padding: hp('2%') }}>
				<Text>NOT: Okunan sayfa sayını en son okuduğunuz sayfa sayısı kadar giriniz.</Text>
			</Layout>
		</Layout>
	);
};

mapStateToProps = (state) => { return state }

export default connect(mapStateToProps)(NewReportScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	footerContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	footerControl: {
		marginHorizontal: 4
	},
	select: {
		marginVertical: 5
	}
});
