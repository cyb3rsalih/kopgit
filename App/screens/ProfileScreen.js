import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontsAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, Layout, Input, Select, Button } from '@ui-kitten/components';

ProfileScreen = () => {
	const [ selectCountry, setSelectCountry ] = React.useState();
	const [ selectCity, setSelectCity ] = React.useState();
	const [ selectGender, setSelectGender ] = React.useState();
	const ulkeler = [ { text: 'Türkiye' }, { text: 'Kanada' }, { text: 'Hollanda' } ];

	const sehirler = [ { text: 'İstanbul' }, { text: 'Sakarya' }, { text: 'Trabzon' } ];
	const cinsiyet = [ { text: 'Erkek' }, { text: 'Kadın' } ];
	return (
		<React.Fragment>
			<Layout style={styles.container}>
				<Layout style={styles.header}>
					<Layout style={{ backgroundColor: 'transparent' }}>
						<Image
							source={require('../assets/kopgitLogo.png')}
							style={{
								width: 100,
								height: 100,
								borderWidth: 2,
								borderColor: '#a7e9af',
								borderRadius: 50,
								backgroundColor: '#ffeadb'
							}}
						/>

						<AntDesign
							name="pluscircle"
							style={{
								position: 'absolute',
								right: 0,
								bottom: 0,
								fontSize: hp('3%'),
								color: '#21bf73'
							}}
							onPress={() => Alert.alert('TODO', 'Fotoğraf yükleme yapılacak.')}
						/>
					</Layout>
					<Layout style={{ marginTop: hp('1%'), backgroundColor: 'transparent', alignItems: 'center' }}>
						<Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>Hakan ANGIN</Text>
						<Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>4. Bölüm</Text>
					</Layout>
				</Layout>
				<Layout
					style={{
						borderTopWidth: 5,
						borderTopColor: '#ff80b0',
						width: wp('100%'),
						height: hp('15%'),
						shadowColor: '#000000',
						shadowOffset: {
							height: 1,
							width: 0
						},
						elevation: 5,
						flexDirection: 'row'
					}}
				>
					<Layout
						style={{
							width: wp('33%'),
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#f1f1f1'
						}}
					>
						<FontsAwesome5 name="award" style={{ fontSize: hp('4%'), color: '#75b79e' }} />
						<Text>Toplam Puan</Text>
						<Text style={{ fontSize: hp('3%'), lineHeight: hp('3%'), padding: hp('1%'), color: '#633a82' }}>
							889
						</Text>
					</Layout>
					<Layout
						style={{
							width: wp('33%'),
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#ffeadb'
						}}
					>
						<FontsAwesome5 name="star" style={{ fontSize: hp('4%'), color: '#fd5e53' }} />
						<Text>Rütbe</Text>
						<Text style={{ fontSize: hp('3%'), lineHeight: hp('3%'), padding: hp('1%'), color: '#633a82' }}>
							C
						</Text>
					</Layout>
					<Layout
						style={{
							width: wp('33%'),
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#f1f1f1'
						}}
					>
						<MaterialCommunityIcons
							name="book-open-page-variant"
							style={{ fontSize: hp('5%'), color: '#be8abf' }}
						/>
						<Text>Toplam Sayfa Sayısı</Text>
						<Text style={{ fontSize: hp('3%'), lineHeight: hp('3%'), padding: hp('1%'), color: '#633a82' }}>
							578
						</Text>
					</Layout>
				</Layout>
				<Layout
					style={{ width: wp('90%'), height: hp('50%'), justifyContent: 'space-between', padding: hp('2%') }}
				>
					<Input status="info" placeholder="Adınız" />
					<Input status="info" placeholder="Soyadınız" />
					<Input status="info" placeholder="E-Posta" />
					<Select
						data={ulkeler}
						selectedOption={selectCountry}
						onSelect={setSelectCountry}
						placeholder="Ülke"
						status="info"
					/>
					<Select
						data={sehirler}
						selectedOption={selectCity}
						onSelect={setSelectCity}
						placeholder="Şehir"
						status="info"
					/>
					<Select
						data={cinsiyet}
						selectedOption={selectGender}
						onSelect={setSelectGender}
						placeholder="Cinsiyet"
						status="info"
					/>
					<Button status="info">Kaydet</Button>
				</Layout>
			</Layout>
		</React.Fragment>
	);
};

export default ProfileScreen;
const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		height: hp('20%'),
		width: wp('100%'),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f6e7e6'
	}
});
