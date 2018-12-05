import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
    AsyncStorage
} from "react-native";

import { connect } from 'react-redux'
import Common from '../common'

const { width, height } = Dimensions.get('window');
console.ignoredYellowBox = ['Warning:']

class ListMoviesHome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrBanner: [],
            arrHotMovies: [],
            arrMultipleUpdateMovies: [],
            arrSingleUpdateMovies: [],
            arrCartoonMovies: [],
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    _renderItem(item) {
        const { navigate } = this.props.navigation
        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details', { item })}>
                <View style={styles.itemContent}>
                    <Image style={styles.itemImage} source={{ uri: item.image }} />
                    <Text style={styles.textItem}>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        const params = this.props.data.data
        const arrBanner = Common.getItemMovies(params[23])
        const arrHotMovies = Common.getItemMovies(params[26])
        const arrMultipleUpdateMovies = Common.getItemMovies(params[24])
        const arrSingleUpdateMovies = Common.getItemMovies(params[27])
        const arrCartoonMovies = Common.getItemMovies(params[25])

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textHeader}>Phim hot trong ngày </Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
                        data={arrHotMovies}
                        renderItem={({ item }) => this._renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View>
                    <Text style={styles.textHeader}>Phim bộ mới cập nhật</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
                        data={arrMultipleUpdateMovies}
                        renderItem={({ item }) => this._renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View>
                    <Text style={styles.textHeader}>Phim lẻ mới cập nhật</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
                        data={arrSingleUpdateMovies}
                        renderItem={({ item }) => this._renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View>
                    <Text style={styles.textHeader}>Phim hoạt hình</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
                        data={arrCartoonMovies}
                        renderItem={({ item }) => this._renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginLeft: 10,
    },
    itemContent: {
        flex: 1,
        flexDirection: 'column'
    },
    textItem: {
        width: 120,
        color: '#FFFFFF',
        marginBottom: 20,
        fontSize: 13,
    },
    textHeader: {
        color: '#FFFFFF',
        marginBottom: 15,
        fontSize: 17,
    },
    itemImage: {
        width: 120,
        height: 160
    }
});

//mapStateToProps
const mapStateToProps = state => {
    return { data: state.data }
}

export default connect(mapStateToProps)(ListMoviesHome)
