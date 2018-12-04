import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from "react-native";

import VideoPlayer from 'react-native-af-video-player';
import Orientation from 'react-native-orientation'
import { fetchVideoData } from '../action/index'
import { connect } from 'react-redux'
import { EatBeanLoader, TextLoader } from 'react-native-indicator';

import Entypo from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/MaterialIcons'
console.ignoredYellowBox = ['Warning:']
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

    shouldComponentUpdate() {
        if (this.state.data.length > 0 && this.state.data != null) {
            return false
        }
        else
            return true
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
            return ( myobj["arr1080p"][0])
        }
        if(myobj["arr720p"].length >0){
            return (myobj["arr720p"][0])
        }
        if(myobj["arr480p"].length >0){
            return (myobj["arr480p"][0])
        }
        if(myobj["arr360p"].length >0){
            return (myobj["arr360p"][0])
        }
        else return "https://r6---sn-i3beln76.googlevideo.com/videoplayback?id=11ef3280ed295160&itag=22&source=webdrive&&requiressl=yes&mm=30&mn=sn-i3beln76&ms=nxu&mv=m&pl=48&sc=yes&ei=nv8FXL_-EoH84wLu1YaABw&susc=drp&app=fife&driveid=1Ex03P__awPjVyi9UsBH93W9lJ3wPzB_S&mime=video/mp4&dur=1449.970&lmt=1543664874727757&mt=1543896880&ip=2001:ee0:305:1::14&ipbits=48&expire=1543904190&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,susc,app,driveid,mime,dur,lmt&signature=4D12A4A016912A41EF8B5A1CC9BB69B327FD9D9D1CED4AC243DC581AB133F5D2.0F923DBF24332FB296C73A397499582142690A66C4E4A193C7A8DBA6432657A4&key=us0"     
    }

    render() {
        if (!this.state.data.length && this.state.check == false) {
            return (
                <View style={{ flex: 1, backgroundColor: 'black', paddingLeft: 10, paddingTop: 10 }}>
                    {/* <TouchableOpacity
                        onPress={this._back}
                    >
                        <Icons
                            name='chevron-left'
                            color='white'
                            size={50}
                        />
                    </TouchableOpacity> */}
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
                    url={{ uri: Quality }}
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