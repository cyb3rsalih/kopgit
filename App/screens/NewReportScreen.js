import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Card, CardHeader, Button, Datepicker, Icon, Input, Select, Text } from '@ui-kitten/components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

NewReportScreen = (props) => {
	const [ date, setDate ] = React.useState(null);
	const [ selectBook, setSelectBook ] = React.useState(null);
	const [ pageCount, setPageCount ] = React.useState(null);

	const data = [
		{ text: 'Şualar' },
		{ text: 'Şualar' },
		{ text: 'Şualar' },
		{ text: 'Şualar' },
		{ text: 'Şualar' },
		{ text: 'Şualar' },
		{ text: 'Şualar' }
	];

	const handleCancel = () => {
		props.navigation.goBack();
	};
	const handleSave = () => {
		//TODO Rapor kaydetme API'si yazılacak.
	};

	const CalendarIcon = (style) => <Icon {...style} name="calendar" />;

	const Header = () => <CardHeader title="Rapor Girişi" />;

	const Footer = () => (
		<View style={styles.footerContainer}>
			<Button style={styles.footerControl} size="small" status="basic" onPress={() => handleCancel()}>
				İPTAL
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
					<Datepicker placeholder="Pick Date" date={date} onSelect={setDate} icon={CalendarIcon} />
					<Select
						style={styles.select}
						data={data}
						placeholder="Okunan Kitap"
						selectedOption={selectBook}
						onSelect={setSelectBook}
					/>
					<Input placeholder="Okunan Sayfa Sayısı" onChangeText={setPageCount} />
				</Layout>
			</Card>
			<Layout style={{ padding: hp('2%') }}>
				<Text>NOT: Okunan sayfa sayını en son okuduğunuz sayfa sayısı kadar giriniz.</Text>
			</Layout>
		</Layout>
	);
};

export default NewReportScreen;
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
