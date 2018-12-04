import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions
} from "react-native";

const listGenres = [
    {
        key: 1,
        name: 'Cổ Trang - Thần Thoại'
    },
    {
        key: 2,
        name: 'Võ Thuật - Kiếm Hiệp'
    },
    {
        key: 3,
        name: 'Phiêu Lưu - Hành Động'
    },
    {
        key: 4,
        name: 'Kinh Dị - Ma'
    },
    {
        key: 5,
        name: 'Khoa Học Viễn Tưởng'
    },
    {
        key: 6,
        name: 'Hài Hước'
    },
    {
        key: 7,
        name: 'Hoạt Hình'
    },
    {
        key: 8,
        name: 'Tâm Lý - Tình Cảm'
    },
    {
        key: 9,
        name: 'Thể Thao - Âm Nhạc'
    },
    {
        key: 10,
        name: 'TV Show'
    }
]

const { width, height } = Dimensions.get('window');

const listNation = [
    {
        key: 1,
        name: 'Ấn Độ'
    },
    {
        key: 2,
        name: 'Âu Mỹ'
    },
    {
        key: 3,
        name: 'Hàn Quốc'
    },
    {
        key: 4,
        name: 'Hồng Kông'
    },
    {
        key: 5,
        name: 'Nhật Bản'
    },
    {
        key: 6,
        name: 'Thái Lan'
    },
    {
        key: 7,
        name: 'Trung Quốc'
    },
    {
        key: 8,
        name: 'Việt Nam'
    },
    {
        key: 9,
        name: 'Quốc Gia Khác'
    },
]

class Category extends Component {

    _renderItem(item) {
        const { navigate } = this.props.navigation
        return (
            <TouchableOpacity
                style={styles.itemList}
                onPress={() => navigate('GridListMovies', item.name)}
            >
                <Text
                    style={styles.itemText}
                >{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { itemSelectedValue } = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    data={"Thể Loại" == itemSelectedValue ? listGenres : listNation}
                    renderItem={({ item }) => this._renderItem(item)}
                    KeyExtractor={item => item.key} >
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515',
        paddingTop: 5,
        paddingBottom: 10
    },
    itemText: {
        fontSize: 18,
        color: 'white',
        padding: 10
    },
    itemList: {
        backgroundColor: '#151515',
        width: width,
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: '#424242',
        alignItems: 'center',
        paddingBottom: 5
    }
});

export default Category;