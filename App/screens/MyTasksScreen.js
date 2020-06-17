import React from 'react'
import { View, StyleSheet, Text, ScrollView,FlatList } from 'react-native'
import { Layout,Button,Card,Icon } from '@ui-kitten/components';
import {getLevels} from '../redux/actions/dataAction'
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

MyTasksScreen = ({navigation,data,dispatch}) => {

    const [q, setQ] = React.useState({id:"asd",title:"dddd",description:"xxx"})

    const getFaqs = () => {
        dispatch(getLevels())
    }
    React.useEffect(() => { getFaqs() },[])

    const redirectToDetail = (item) => { 
        console.log("Geldi!!!!",item)
        navigation && navigation.navigate('Görev Detay',item)
    }

    return (
            <View style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.container} >
            <View style={styles.flatListContainer}>            
           {data.userLevels.map((item,index) => {
return((item.isCompleted || item.isCurrent) &&
               (
                  <Card key={index} style={styles.card} status='warning' onPress={() =>redirectToDetail(item)} >
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text style={{fontSize:wp('4%')}}>{item.orderNo}</Text>
                { !item.isCurrent && <Icon 
                style={styles.icon}
                fill='#8F9BB3'
                name={'checkmark-outline'}/>}
                </View>
                 </Card>
               ))
           })}
           
           </View>

            {/* <FlatList
            data={data.userLevels}
            renderItem={( {item,index} ) => renderItem(item)}
            keyExtractor={item => item.id}
            /> */}
    
        </ScrollView>
            </View>
    )
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(MyTasksScreen)

;

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width:wp('100%'),
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
    },
    flatListContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'#dddddd'
    },
    card: {
        height:wp('15%'),
        width:hp('15%'),
        margin: 2,
    },
    icon:{
        height:wp('5%'),
        width:hp('5%')
    }
})