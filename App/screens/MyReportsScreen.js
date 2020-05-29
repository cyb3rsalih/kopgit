import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Alert } from 'react-native';
import { Modal, Layout, Button, Select, Text } from '@ui-kitten/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SwipeListView } from 'react-native-swipe-list-view';
import { dummyData, data } from '../assets/dummyData';
import AntDesign from 'react-native-vector-icons/AntDesign';

//! Sayfadaki datalar geçici olarak Asset klasörü içerisinde tutuldu. Swiper ayrı bir component haline getirilip import edilecek.

//TODO Stil değişkenleri için bir dosya oluştur.
export const colorBackground = '#ffffff';
export const colorText = '#000000';
export const colorHighlight = '#e5e5e5';
export const colorDanger = '#e91e63';
export const colorInfo = '#2196f3';
export const backButtonWidth = 75;
export const openWidth = backButtonWidth;
export const fontSize = 18;
export const padding = 0;

MyReportsScreen = (props) => {
	//* Görüntülenme yılını tutuyor.
	const [ selectYear, setSelectYear ] = React.useState(null);

	//* Swiper-Detay onPress Fonksiyonu
	const handleInfo = (item) => {
		// * Detay sayfası rapor giriş ekranı ile aynı olacakmış!!
		props.navigation.navigate('Yeni Rapor Girişi');
	};

	//* Swiper-Sil işlemi onPress Fonksiyonu
	const handleDelete = (item) => {
		//TODO Swiper "SİL" işlemi için fonksiyon yazılacak.
	};

	//* Swiper için Render olacak Item
	const Item = (item) => {
		return (
			<Layout style={styles.listContainer}>
				<Text style={styles.listFonts}>{item.date}</Text>
				<Text style={styles.listFonts}>{item.readingBook}</Text>
				<Text style={styles.listFonts}>{item.pageCount}</Text>
				<AntDesign name="swap" style={styles.swapText} />
			</Layout>
		);
	};

	return (
		<Layout style={styles.container}>
			<Layout style={styles.headerContainer}>
				<Button onPress={() => props.navigation.navigate('Yeni Rapor Girişi')} status="success">
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
					data={dummyData}
					renderItem={({ item }) => Item(item)}
					keyExtractor={(item) => item.id}
					renderHiddenItem={({ item }) => (
						<View style={styles.rowBack}>
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

export default MyReportsScreen;
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
