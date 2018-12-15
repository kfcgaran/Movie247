import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    TouchableHighlight
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

class Menu extends Component {

    render() {
        const { itemSelectedValue } = this.props
        return (
            <View style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarImage}>
                        <Image
                            style={styles.avatar}
                            source={require('../image/logo-menu.png')}
                        />
                    </View>
                </View>
                <ScrollView style={styles.scrollContainer}>               
                    <TouchableHighlight
                        style={"Trang Chủ" == itemSelectedValue ? [styles.items, styles.itemSelected] : styles.noSelectedItems}
                        onPress={() => this.props.itemSelected("Trang Chủ")}
                    >
                        <View style={styles.withIcon}>
                            <Image
                                style={styles.iconWithText}
                                source={require('../image/home.png')}
                            />
                            <Text style={styles.text}>Trang Chủ</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={"Phim Chiếu Rạp" == itemSelectedValue ? [styles.items, styles.itemSelected] : styles.noSelectedItems}
                        onPress={() => this.props.itemSelected("Phim Chiếu Rạp")}
                    >
                        <View style={styles.withIcon}>
                            <Image
                                style={styles.iconWithText}
                                source={require('../image/phimchieurap.png')}
                            />
                            <Text style={styles.text}>Phim Chiếu Rạp</Text>
                        </View>
                    </TouchableHighlight>


                    <TouchableHighlight
                        style={"Thể Loại" == itemSelectedValue ? [styles.items, styles.itemSelected] : styles.noSelectedItems}
                        onPress={() => this.props.itemSelected("Thể Loại")}
                    >
                        <View style={styles.withIcon}>
                            <Image
                                style={styles.iconWithText}
                                source={require('../image/category.png')}
                            />
                            <Text style={styles.text}>Thể Loại</Text>
                        </View>
                    </TouchableHighlight>


                    <TouchableHighlight
                        style={"Quốc Gia" == itemSelectedValue ? [styles.items, styles.itemSelected] : styles.noSelectedItems}
                        onPress={() => this.props.itemSelected("Quốc Gia")}
                    >
                        <View style={styles.withIcon}>
                            <Image
                                style={styles.iconWithText}
                                source={require('../image/flag.png')}
                            />
                            <Text style={styles.text}>Quốc Gia</Text>
                        </View>
                    </TouchableHighlight>


                    <TouchableHighlight
                        style={"Phim Lẻ" == itemSelectedValue ? [styles.items, styles.itemSelected] : styles.noSelectedItems}
                        onPress={() => this.props.itemSelected("Phim Lẻ")}
                    >
                        <View style={styles.withIcon}>
                            <Image
                                style={styles.iconWithText}
                                source={require('../image/phimle.png')}
                            />
                            <Text style={styles.text}>Phim Lẻ</Text>
                        </View>
                    </TouchableHighlight>


                    <TouchableHighlight
                        style={"Phim Bộ" == itemSelectedValue ? [styles.items, styles.itemSelected] : styles.noSelectedItems}
                        onPress={() => this.props.itemSelected("Phim Bộ")}
                    >
                        <View style={styles.withIcon}>
                            <Image
                                style={styles.iconWithText}
                                source={require('../image/phimbo.png')}
                            />
                            <Text style={styles.text}>Phim Bộ</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={"Bảng Xếp Hạng" == itemSelectedValue ? [styles.items, styles.itemSelected] : styles.noSelectedItems}
                        onPress={() => this.props.itemSelected("Bảng Xếp Hạng")}
                    >
                        <View style={styles.withIcon}>
                            <Image
                                style={styles.iconWithText}
                                source={require('../image/ranking.png')}
                            />
                            <Text style={styles.text}>Bảng Xếp Hạng</Text>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#0000"
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 50,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    avatar: {
        width: 140,
        height: 35,
        justifyContent: "center",
    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollContainer: {
        width: width / 2 + 59
    },
    rightIcon: {
        paddingRight: 20
    },
    iconWithText: {
        marginRight: 20,
        paddingLeft: 20,
        width: 20,
        height: 20
    },
    items: {
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    }
});

export default Menu;