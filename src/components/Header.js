import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    TouchableOpacity
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => {
    const { navigate } = props.navigation
    const { screen } = props.itemSelectedValue
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.toggle()}>
                <Icon
                    name="bars"
                    color="white"
                    size={25}
                />
            </TouchableOpacity>
            {
                props.itemSelectedValue == 'Trang Chủ' ?
                    <Image style={styles.logo} source={require('../image/Netflix-logo.png')} />
                    :
                    <Text style={{color: 'white', fontSize: 18}}>{props.itemSelectedValue}</Text>
            }
            <TouchableOpacity onPress={() => navigate('Search')}>
                <Icon
                    name="search"
                    color="white"
                    size={25}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 5,
    },
    logo: {
        width: 120,
        height: 40
    }
})

export default Header;