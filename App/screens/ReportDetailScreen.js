import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Card, CardHeader, Button, Text } from '@ui-kitten/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {connect} from 'react-redux'

import { deleteReport } from '../redux/actions/dataAction';

NewReportScreen = (props) => {
	const { dispatch,navigation,route } = props

	const {readingReportId,bookId,bookName,pageCount,note,reportDate} = route.params

	//* İptal butonu fonksiyonu
	const handleCancel = () => { navigation.navigate('Geçmiş Raporlar') };

	//* Swiper-Sil işlemi onPress Fonksiyonu
	const handleDelete = (item) => {
		let silinecek = { readingReportId: item	}
		dispatch(deleteReport(silinecek)).then(({action,value}) => { alert(value.message) })
		navigation.navigate('Geçmiş Raporlar')
	};

	//* Card componenti Header'ı
	const Header = () => <CardHeader title="Rapor Detayı" />;

	//* Card componenti Footer'ı
	const Footer = () => (
		<View style={styles.footerContainer}>
			<Button style={styles.footerControl} size="small" status="basic" onPress={() => handleCancel()}>
				Raporlarım Sayfasına Dön
			</Button>
			<Button style={styles.footerControl} size="small" status="danger" onPress={() => handleDelete(readingReportId)}>
				Raporu Sil - Bug
			</Button>
		</View>
	);
	return (
		<Layout style={styles.container}>
			<Card header={Header} footer={Footer} style={{ width: wp('100%') }}>
				<Layout>
					<Text>Rapor Tarihi: { new Date(reportDate).toLocaleDateString() } </Text>
					<Text>Okunan Kitap: {bookName} </Text>
					<Text>Okunan Sayfa Sayısı: {pageCount}</Text>
				</Layout>
			</Card>
			<Layout style={{ padding: hp('2%') }}>
				<Text>Sadece son 1 haftada girdiğin raporları silebilirsin.</Text>
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
	}
});
