import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    
} from "react-native";

import VideoPlayer from 'react-native-af-video-player';
import Orientation from 'react-native-orientation'
import { fetchVideoData } from '../action/index'
import { connect } from 'react-redux'
import { EatBeanLoader, TextLoader } from 'react-native-indicator';

import Entypo from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/MaterialIcons'
console.disableYellowBox = true;
class VideoView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: [],
            check: false
        }
        this._back = this._back.bind(this)
    }

    static navigationOptions = {
        headerVisible: false
    }

    componentWillMount() {
        const { params } = this.props.navigation.state
        const { Link } = params.item
        this.getMoviesFromApiAsync(`http://movie247.online/BiluTV/BiluTV/GetAPI/get.php?url=${Link}`)
        Orientation.lockToLandscape()
    }

    componentWillUnmount(){
        Orientation.lockToPortrait()
    }

    shouldComponentUpdate() {
        return true;
    }

    getMoviesFromApiAsync(url) {
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.length > 0){ 
                    this.setState({
                        data: responseJson
                    })
                }
                else {
                    this.setState({
                        check: true
                    })
                }            
            })
            .catch((error) => {
                console.error(error);
            })
            ;
    }

    _back() {
        Orientation.lockToPortrait()
        const { goBack } = this.props.navigation
        goBack()
    }

    setUpQuality(arr){
        let arr360 = [];
        let arr480 = [];
        let arr720 = [];
        let arr1080 = [];
        let All = [];
        let url = '';
        for(let i= 0; i < arr.length; i++)
        {
            if(arr[i].label == "360p"){
                arr360.push(arr[i].file)
            }
            if(arr[i].label == "480p"){
                arr480.push(arr[i].file)
            }
            if(arr[i].label == "720p"){
                arr720.push(arr[i].file)
            }
            if(arr[i].label == "1080p"){
                arr1080.push(arr[i].file)
            }
        }
        let myobj = {
            "arr360p": arr360,
            "arr480p": arr480,
            "arr720p": arr720,
            "arr1080p": arr1080,
        }
        if(myobj["arr1080p"].length >0){
            // for(let i = 0 ; i < myobj["arr1080p"].length ; i++){
            //     let string = myobj["arr1080p"][i].substr(0,21)
            //     if(string == 'http://api.bilutv.net') return myobj["arr1080p"][i]
            // }
            return (myobj["arr1080p"][0])
        }
        if(myobj["arr720p"].length >0){
            // for(let i = 0 ; i < myobj["arr720p"].length ; i++){
            //     let string = myobj["arr720p"][i].substr(0,21)
            //     if(string == 'http://api.bilutv.net') return myobj["arr720p"][i]
            // }
            return (myobj["arr720p"][0])
        }
        if(myobj["arr480p"].length >0){
            // for(let i = 0 ; i < myobj["arr480p"].length ; i++){
            //     let string = myobj["arr480p"][i].substr(0,21)
            //     if(string == 'http://api.bilutv.net') return myobj["arr480p"][i]
            // }
            return (myobj["arr480p"][0])
        }
        if(myobj["arr360p"].length >0){
            // for(let i = 0 ; i < myobj["arr360p"].length ; i++){
            //     let string = myobj["arr360p"][i].substr(0,21)
            //     if(string == 'http://api.bilutv.net') return myobj["arr360p"][i]
            // }
            return (myobj["arr360p"][0])
        }
        else return "https://r6---sn-i3beln76.googlevideo.com/"     
    }

    render() {
        if (!this.state.data.length && this.state.check == false) {
            return (
                <View style={{ flex: 1, backgroundColor: 'black', paddingLeft: 10, paddingTop: 10 }}>
                    <View style={styles.loadingContainer}>
                        <EatBeanLoader
                            color='white'
                            size={50}
                        />
                        <Text style={{ color: 'white', paddingTop: 7 }}>Đang tải phim</Text>
                    </View>
                </View>
            )
        }
        const { params } = this.props.navigation.state
        const Quality = this.setUpQuality(this.state.data)
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <VideoPlayer
                    autoPlay={false}
                    fullScreenOnly={true}
                    onMorePress={this._back}
                    more={styles.backButton}
                    title={params.name + ' - Tập ' +params.item.Tap}
                    url={{ uri: Quality}}
                    onEnd = {this._back}
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        paddingTop: 10
    }
});

export default VideoView