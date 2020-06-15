import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { Layout,Button } from '@ui-kitten/components';
import {listFaq} from '../redux/actions/dataAction'
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

FAQScreen = ({navigation,data,dispatch}) => {

    const [q, setQ] = React.useState({id:"asd",title:"dddd",description:"xxx"})

    const getFaqs = () => {
        dispatch(listFaq()).then(({action,value}) => {
			console.log(action)
			})			
    }

    React.useEffect(() => { getFaqs() },[])

    const redirectToDetail = (question) => { 
        console.log("Geldi!!!!",question)
        navigation && navigation.push('Soru Detay',question)
    }

    return (
        <ScrollView contentContainerStyle={styles.container} >
            <Text>Frequently Asked Questions</Text>
            
            {
                data.faqs && data.faqs.map( (faq,index) => {
                    return(
                        <View style={{marginVertical:10}} key={index}>
                            <Button size={'small'} status="danger" onPress={() => {
                                redirectToDetail(faq)
                                } }>
                                {faq.title}
                            </Button>
                        </View>
                    )
                } )
            }
			
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(FAQScreen)

;

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width:wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCentered:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 22,

    },
    modalContainer:{
        margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    }
})