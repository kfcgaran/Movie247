import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    StatusBar
} from "react-native";

import { fetchData } from '../action/index'
import { connect } from 'react-redux'
import Orientation from 'react-native-orientation'

const links = [
    // Menu
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/Menu/phimbo.json', // [0]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/Menu/phimchieurap.json', // [1]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/Menu/phimle.json', // [2]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/Menu/phimxemnhieu.json', // [3]
    // Quoc Gia
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/ando.json', // [4]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/aumy.json', // [5]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/hanquoc.json', // [6]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/hongkong.json', // [7]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/nhatban.json', // [8]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/quocgiakhac.json', // [9]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/thailan.json', // [10]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/trungquoc.json', // [11]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/QuocGia/vietnam.json',// [12]
    // The Loai 
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimcotrangthanthoai.json', // [13]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimhaihuoc.json', // [14]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimhoathinh.json', // [15]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimkhoahocvientuong.json', // [16]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimkinhdima.json', // [17]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimphieuluuhanhdong.json', // [18]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimtamlytinhcam.json', // [19]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimthethaoamnhac.json', // [20]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/phimvothuatkiemhiep.json', // [21]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TheLoai/tvshow.json', // [22]
    // Home
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/banner.json', // [23]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/phimbomoicapnhat.json', // [24]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/phimhoathinh.json', // [25]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/phimhot.json', // [26]
    'http://movie247.online/BiluTV/BiluTV/JsonPhim/TrangChu/phimlemoicapnhat.json' // [27]
]

class Splash extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentWillMount() {
        Orientation.lockToPortrait()
    }

    static navigationOptions = {
        // header: null,
    }

    componentWillMount() {
        this.props.fetchData(links)
    }

    renderActivityIndicator() {
        const { activityIndicatorContainer } = styles
        return (
            <View style={activityIndicatorContainer}>
                <ActivityIndicator
                    size="large"
                    color='#585858'
                />
            </View>
        )
    }

    renderList() {
        const { data } = this.props.data
        const { navigate } = this.props.navigation
        if (data.length > 0) { navigate('Home') }
    }

    render() {
        const { isFetching } = this.props.data
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar
                    backgroundColor="black"
                />
                {isFetching ? this.renderActivityIndicator() : this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});

//mapStateToProps
const mapStateToProps = state => {
    return { data: state.data }
}

//mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        fetchData: (url) => dispatch(fetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)