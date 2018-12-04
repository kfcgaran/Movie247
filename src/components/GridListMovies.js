import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    InteractionManager,
    ActivityIndicator,
    Dimensions
} from "react-native";

import { connect } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/FontAwesome'
import Common from '../common'
import { AfterInteractions } from 'react-native-interactions';

const ITEMS_PER_PAGE = 28;
const {width,height} = Dimensions.get('window')

class GridListMovies extends Component {

    constructor(props) {
        super(props);
        const {
            page = 1
        } = props
        this.state = {
            page: 1,
            reload: false
        }
    }

    getIndexArrMovie(item) {
        if (item == 'Phim Chiếu Rạp') {
            return 1
        }
        if (item == 'Phim Lẻ') {
            return 2
        }
        if (item == 'Phim Bộ') {
            return 0
        }
        if (item == 'Bảng Xếp Hạng') {
            return 3
        }
        if (item == 'Ấn Độ') {
            return 4
        }
        if (item == 'Âu Mỹ') {
            return 5
        }
        if (item == 'Hàn Quốc') {
            return 6
        }
        if (item == 'Nhật Bản') {
            return 8
        }
        if (item == 'Quốc Gia Khác') {
            return 9
        }
        if (item == 'Thái Lan') {
            return 10
        }
        if (item == 'Trung Quốc') {
            return 11
        }
        if (item == 'Việt Nam') {
            return 12
        }
        if (item == 'Cổ Trang - Thần Thoại') {
            return 13
        }
        if (item == 'Hài Hước') {
            return 14
        }
        if (item == 'Hoạt Hình') {
            return 15
        }
        if (item == 'Khoa Học Viễn Tưởng') {
            return 16
        }
        if (item == 'Kinh Dị - Ma') {
            return 17
        }
        if (item == 'Phiêu Lưu - Hành Động') {
            return 18
        }
        if (item == 'Tâm Lý - Tình Cảm') {
            return 19
        }
        if (item == 'Thể Thao - Âm Nhạc') {
            return 20
        }
        if (item == 'Võ Thuật - Kiếm Hiệp') {
            return 21
        }
        if (item == 'TV Show') {
            return 22
        }
    }

    static navigationOptions = {
        headerVisible: false
    }

    _renderItem(item, id) {
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

    _loadMoreMovie() {
        this.setState({
            page: this.state.page + 1
        })
    }

    render() {
        const params = this.props.data.data
        const {goBack,navigate} = this.props.navigation
        const paramsCategory = (this.props.navigation.state.params != undefined ? this.props.navigation.state.params : '')
        const paramsItemSelected = (this.props.itemSelectedValue != undefined ? this.props.itemSelectedValue : '')
        const index = this.getIndexArrMovie(paramsCategory.length ? paramsCategory : paramsItemSelected)     
        const arrMovie = Common.getItemMovies(params[index])
        const initArr = arrMovie.slice(0, ITEMS_PER_PAGE)
        const continueArr = arrMovie.slice(0, (this.state.page + 1) * ITEMS_PER_PAGE - 1)
        if (!arrMovie.length) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        color='white'
                        size={25}
                    />
                </View>
            )
        }
        return (
            <View style={styles.container}>
            {
                paramsCategory.length ?
                <View style={styles.containerHeader}>
                    <TouchableWithoutFeedback onPress={() => goBack()}>
                        <Entypo
                            name='chevron-thin-left'
                            color="white"
                            size={25}
                        />
                    </TouchableWithoutFeedback>
                    <Text style={{color: 'white', fontSize: 18}}>{paramsCategory}</Text>
                    <TouchableWithoutFeedback onPress={() => navigate('Search')}>
                    <Icon
                        name="search"
                        color="white"
                        size={25}
                    />
                    </TouchableWithoutFeedback>
                </View>
                : null
            }
                <FlatList
                    style={{ flex: 1, paddingLeft: 5, paddingRight: 5, paddingTop: 5}}
                    data={this.state.page == 1 ? initArr : continueArr}
                    numColumns={3}
                    keyExtractor={item => item.id}
                    // columnWrapperStyle={{ maginLeft: 10 , marginRight: 10}}
                    onEndReached={this._loadMoreMovie.bind(this)}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item }) => this._renderItem(item)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    containerHeader: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    itemImage: {
        width: 120,
        height: 160
    },
    itemContent: {
        flex: 1,
        flexDirection: 'column'
    },
    textItem: {
        width: width/3.3,
        color: '#FFFFFF',
        marginBottom: 20,
        fontSize: 13,
    },
});

//mapStateToProps
const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(GridListMovies)
