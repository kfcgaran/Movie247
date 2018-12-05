import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from "react-native";

import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window');

const Slider = props => (<View style={styles.container}>
    <Image style={styles.image} source={props.uri} />
</View>
)

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

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imagesSlider: [
                require('../image/1.jpg'),
                require('../image/2.png'),
                require('../image/3.jpg'),
                require('../image/4.jpg'),
                require('../image/5.png'),
                require('../image/6.jpg'),
                require('../image/7.jpg'),
                require('../image/8.jpg')
            ]
        }
    }

    render() {
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
                        this.state.imagesSlider.map((item, i) => <Slider
                            uri={item}
                            key={i}
                        />)
                    }
                </Swiper>
            </View>
        )
    }
}

