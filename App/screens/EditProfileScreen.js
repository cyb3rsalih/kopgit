import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, Layout, Input, Select, Button } from '@ui-kitten/components';
import { KeyboardAvoidingView } from '../components/KeyboardAvoidingView';

EditProfileScreen = () => {
	const [ selectCountry, setSelectCountry ] = React.useState();
	const [ selectCity, setSelectCity ] = React.useState();
	const [ selectGender, setSelectGender ] = React.useState();
	const ulkeler = [ { text: 'Türkiye' }, { text: 'Kanada' }, { text: 'Hollanda' } ];

	const sehirler = [ { text: 'İstanbul' }, { text: 'Sakarya' }, { text: 'Trabzon' } ];
	const cinsiyet = [ { text: 'Erkek' }, { text: 'Kadın' } ];
	return (
		<KeyboardAvoidingView>
			<Layout style={styles.container}>
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
		</KeyboardAvoidingView>					
	);
};

export default EditProfileScreen;
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
