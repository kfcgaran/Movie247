import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native";

import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import Common from '../common'
const { width, height } = Dimensions.get('window');


const Slider = props => (<TouchableWithoutFeedback style={styles.container} onPress={() => props.navigate('Details', getObjMovie(props.item))}>
    <Image style={styles.image} source={{uri: props.uri}} />
</TouchableWithoutFeedback>
)

function getObjMovie(obj) {
    myobj = {
        item : obj
    }
    return myobj
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width: width,
        height: 150,
        resizeMode: 'stretch',
    },
    dot: {
        backgroundColor: '#F2F2F2',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 5,
        marginLeft: 5,
    },
})
class Slide extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const params = this.props.data.data
        const arrBanner = Common.getItemMovies(params[23])
        const {navigate} = this.props.navigation
        return (
            <View style={{ flex: 0.6 }}>
                <Swiper
                    autoplay
                    dot={<View style={styles.dot} />}
                    paginationStyle={{
                        bottom: 5, left: null, right: 10
                    }}
                    height={240}
                >
                    {
                        arrBanner.map((item, i) => <Slider
                            uri={item.image}
                            key={i}
                            item = {item}
                            navigate = {navigate}
                        />)
                    }
                </Swiper>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { data: state.data }
}

export default connect(mapStateToProps)(Slide)
