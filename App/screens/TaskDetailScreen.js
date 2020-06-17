import React from 'react'
import { View, StyleSheet, ScrollView,Modal } from 'react-native'
import { Layout,Button ,Text} from '@ui-kitten/components';
import {listFaq} from '../redux/actions/dataAction'
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';


TaskDetailScreen = ({route,navigation,data,dispatch,}) => {
    let webview = null
    const { id,levelName,tasks,isCompleted,isCurrent } = route.params;
    
    
    const [task,setTask] = React.useState(tasks[0])

    const prepareContent = (content) => {

    let bootstrap_template = `<!doctype html><html lang=\"tr\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\"><title>Hello, world!</title></head><body>"${content}"<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script></body></html>`

  

    return bootstrap_template
    }


    React.useEffect(() => {
        //webview.setWebChromeClient(new WebChromeClient());
    },[])

    return (
        <ScrollView contentContainerStyle={styles.container} >
            <View style={{justifyContent:'space-around',alignItems:'center' }} >
            <Text status={'primary'} style={{textAlign:'center'}} category={'h5'} >{levelName}</Text>
            { tasks.map((task,index) => {
                <Button key={index}  size={'small'} status={'primary'} >
                    <Text>{task.name}</Text>
                </Button>
            }) }
            </View>
                <WebView
                ref={(ref) => (webview = ref)}
            //ref={ref => (this.webview = ref)}
            style={styles.modalCentered}
            useWebKit={true}
            
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            originWhitelist={['*']}
            source={{ html: prepareContent(task.description) }}
            />
           
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(TaskDetailScreen);

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width:wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCentered:{
        height: hp('100%'),
        width:wp('100%'),
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 22,

    },

})