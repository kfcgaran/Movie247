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
import Common from '../common'
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
        const Quality = Common.setUpQuality(this.state.data)
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