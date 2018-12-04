import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    Image,
    Keyboard
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, FlatList } from "react-native-gesture-handler";
import Common from '../common'

const { width, height } = Dimensions.get('window');

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            arrSearch: [],
            check: false
        }
        this.handleEditComplete = this.handleEditComplete.bind(this)
    }

    static navigationOptions = {
        headerVisible: false
    }

    deleteData() {
        this.setState({ text: '' })
    }

    _renderItem(item) {
        const { navigate } = this.props.navigation
        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details', { item })}>
                <View style={styles.itemContent}>
                    <Image style={styles.itemImage} source={{ uri: item.Anh }} />
                    <Text style={styles.textItem}>{item.TenPhim}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    fetchSearchMovies(url) {
        return fetch(`http://movie247.online/BiluTV/BiluTV/GetAPI/TimKiem.php?url=http://bilutv.net/tim-kiem.html?q=${url}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.length > 0){
                    this.setState({
                        arrSearch: responseJson,
                    })
                }
                else{
                    this.setState({
                        check: true
                    })
                } 
            })
            .catch((error) => {
                console.error(error)
            })
    }

    handleEditComplete() {
        const { navigate } = this.props.navigation
        const text = this.state.text.replace(' ', '+')
        return (
            this.fetchSearchMovies(text)
        )

    }

    render() {
        const { goBack } = this.props.navigation
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon
                        name="search"
                        color="grey"
                        size={20}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        value={this.state.text}
                        onChangeText={(text) => this.setState({ text })}
                        style={styles.input}
                        size={22}
                        fontSize={16}
                        multiline={false}
                        placeholder="Từ khóa"
                        placeholderTextColor="grey"
                        keyboardAppearance="dark"
                        autoFocus={true}
                        returnKeyType='search'
                        keyboardType='default'
                        onSubmitEditing={this.handleEditComplete}
                    />
                    {this.state.text ?
                        <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                            <Icon
                                name="times-circle"
                                color="grey"
                                size={22}
                                style={styles.iconInputClose}
                            />
                        </TouchableWithoutFeedback>
                        : null}
                    <TouchableWithoutFeedback style={styles.cancelButton} onPress={() => goBack()}>
                        <Text style={styles.cancelButtonText}>Trở lại</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                {
                    !this.state.arrSearch.length && this.state.check== false?
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: 'white', fontSize: 20, paddingBottom: 10}}>Gợi ý</Text>
                            <Text style={{color: '#b3b3b3', fontSize: 17, paddingTop: 6}}>Captain American</Text>
                            <Text style={{color: '#b3b3b3', fontSize: 17, paddingTop: 6}}>Harry Potter</Text>
                            <Text style={{color: '#b3b3b3', fontSize: 17, paddingTop: 6}}>Insidious 3</Text>
                        </View>
                    :
                    this.state.arrSearch.length > 0 ?
                        <FlatList
                        style={{ marginHorizontal: 5 }}
                        data={this.state.arrSearch}
                        numColumns={3}
                        columnWrapperStyle={{ marginTop: 5, maginLeft: 5 }}
                        renderItem={({ item }) => this._renderItem(item)}
                    />
                    :
                    this.state.text && this.state.check == true ?
                    <Text style={{ color: '#b3b3b3', textAlign: 'center', fontSize: 18}}>Không tìm thấy phim {':(('}</Text>
                    : null
                }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 60,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        top: 16,
        left: 17,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    iconInputClose: {
        position: 'absolute',
        top: 14,
        marginTop: 3,
        right: 100,
        backgroundColor: 'transparent',
        zIndex: 1
    },
    input: {
        width: width - (width / 4),
        height: 40,
        backgroundColor: '#323232',
        marginHorizontal: 10,
        paddingLeft: 35,
        padding: 5,
        borderRadius: 3,
        color: 'grey',
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 15
    },
    cancelButton: {
        left: 10
    },
    image: {
        marginRight: 5,
        width: 130,
        height: 170
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
        width: width / 3.3,
        color: '#FFFFFF',
        marginBottom: 20,
        fontSize: 13,
    },
})

export default Search;