import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Alert } from 'react-native';
import { Modal, Layout, Button, Select, Text } from '@ui-kitten/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SwipeListView } from 'react-native-swipe-list-view';
import { dummyData, data } from '../assets/dummyData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux'
import {getUserReadingReports} from '../redux/actions/dataAction'

//! Sayfadaki datalar geçici olarak Asset klasörü içerisinde tutuldu. Swiper ayrı bir component haline getirilip import edilecek.

//TODO Stil değişkenleri için bir dosya oluştur.
const colorBackground = '#ffffff';
const colorText = '#000000';
const colorHighlight = '#e5e5e5';
const colorDanger = '#e91e63';
const colorInfo = '#2196f3';
const backButtonWidth = 75;
const openWidth = backButtonWidth;
const fontSize = 18;
const padding = 0;

MyReportsScreen = (props) => {
	const {dispatch,navigation} = props

	


	//* Görüntülenme yılını tutuyor.
	const [ selectYear, setSelectYear ] = React.useState(new Date().getFullYear());
	const [ realData, setRealData ] = React.useState(dummyData);

	const sendRequest = () => {
		let data = {'year': 2020}

		dispatch(getUserReadingReports(JSON.stringify(data))).then(({action,value}) => {
			if(value.isSuccess){
				setRealData(value.userReadingReports)
			}
		})	

	}

	React.useEffect(() => {
		// Control taken once -> If not:
		sendRequest()
	},[])

	//* Swiper-Detay onPress Fonksiyonu
	const handleInfo = (item) => {
		// * Detay sayfası rapor giriş ekranı ile aynı olacakmış!!
		// NAVİGASYON YAPARKEN GEREKLİ PARAMETRELER GÖNDERİLİRSE PROBLEM KALMAZ -- salih
		navigation.navigate('Yeni Rapor Girişi',);
	};

	//* Swiper-Sil işlemi onPress Fonksiyonu
	const handleDelete = (item) => {
		//TODO Swiper "SİL" işlemi için fonksiyon yazılacak.
		alert("Silindi...")
	};

	//* Swiper için Render olacak Item
	const Item = (item) => {
		/**
		 * bookId
		 * bookName
		 * note
		 * pageCount
		 * readingReportId
		 * reportDate
		 * userId
		 */
		return (
			<Layout style={styles.listContainer}>
				<Text style={styles.listFonts}>{new Date(item.reportDate).toLocaleDateString()}</Text>
				<Text style={[styles.listFonts]}>{item.bookName}</Text>
				<Text style={styles.listFonts}>{item.pageCount}</Text>
				<AntDesign name="swap" style={styles.swapText} />
			</Layout>
		);
	};

	return (
		<Layout style={styles.container}>
			<Layout style={styles.headerContainer}>
				<Button onPress={() => navigation.navigate('Yeni Rapor Girişi')} status="success">
					Rapor Girişi Yap
				</Button>
				<Layout style={styles.headerContainerSub}>
					<Text>Görüntüleme Yılı</Text>
					<Select
						style={styles.select}
						data={data}
						placeholder="Yıllar"
						selectedOption={selectYear}
						onSelect={setSelectYear}
					/>
				</Layout>
			</Layout>
			<SafeAreaView>
				<SwipeListView
					data={realData}
					renderItem={({ item }) => Item(item)}
					keyExtractor={(item) => item.readingReportId.toString()}
					renderHiddenItem={({ item }) => (
						<View key={item.id} style={styles.rowBack}>
							<TouchableOpacity
								style={[ styles.backLeftBtn, styles.deleteBtn ]}
								onPress={() => handleDelete(item)}
							>
								<Text style={styles.backTextDelete}>Sil</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={[ styles.backRightBtn, styles.infoBtn ]}
								onPress={() => handleInfo(item)}
							>
								<Text style={styles.backTextInfo}>Detaylar</Text>
							</TouchableOpacity>
						</View>
					)}
					leftOpenValue={openWidth}
					rightOpenValue={-openWidth}
					stopLeftSwipe={openWidth}
					stopRightSwipe={-openWidth}
				/>
			</SafeAreaView>
		</Layout>
	);
};

mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps)(MyReportsScreen)


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	listContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: hp('2%'),
		shadowOffset: {
			height: 0,
			width: 1
		},
		shadowColor: '#000',
		shadowRadius: 5,
		elevation: 3
	},
	listFonts: {
		fontWeight: 'bold',
		fontSize: hp('2%')
	},
	headerContainer: {
		padding: hp('2%')
	},
	headerContainerSub: {
		paddingVertical: hp('2%')
	},

	select: {
		marginVertical: 5
	},
	swapText: {
		fontSize: fontSize
	},
	rowFront: {
		justifyContent: 'center',
		padding: padding,
		backgroundColor: colorBackground,
		borderBottomColor: colorHighlight,
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	frontText: {
		color: colorText,
		fontSize: fontSize
	},
	rowBack: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colorBackground,
		flexDirection: 'row',
		paddingHorizontal: padding
	},

	backTextInfo: {
		color: colorBackground,
		fontSize: fontSize
	},
	backTextDelete: {
		color: colorBackground,
		fontSize: fontSize
	},

	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: backButtonWidth
	},
	infoBtn: {
		backgroundColor: colorInfo,
		right: 0
	},

	backLeftBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: backButtonWidth
	},

	deleteBtn: {
		backgroundColor: colorDanger,
		left: 0
	}
});
