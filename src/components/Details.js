import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share,
    ImageBackground,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ReadMore from 'react-native-read-more-text';
import Feather from 'react-native-vector-icons/Feather';
import Swiper from "react-native-swiper";
import DialogInput from 'react-native-dialog-input';
import { FlatList } from "react-native-gesture-handler";
import Orientation from 'react-native-orientation'
import Common from '../common'
import { NavigationActions } from 'react-navigation'

const { width, height } = Dimensions.get('window');
console.ignoredYellowBox = ['Warning:']

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemSelected: false,
            arrDetails: []
        }
    }
    onShare() {
        Share.share({
            title: 'Movie247',
            url: 'fb.com'
        }, {
                dialogTitle: 'Share with'
            })
    }

    static navigationOptions = {
        headerVisible: false
    }

    componentWillMount() {
        Orientation.lockToPortrait()
        const { params } = this.props.navigation.state
        const { item } = params
        this.getDetailMoviesFromApi(item.Link)
    }

    getDetailMoviesFromApi(url) {
        return fetch(`http://movie247.online/BiluTV/BiluTV/GetAPI/ChiTietPhim.php?url=${url}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    arrDetails: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: '#b3b3b3', marginTop: 5 }} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: '#b3b3b3', marginTop: 5 }} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    _renderEpisodes(item) {
        const { navigate } = this.props.navigation
        const name = this.state.arrDetails[0].TenPhim
        return (
            <TouchableWithoutFeedback
                onPress={() => navigate('VideoView', { item, name })}
                underlayColor="#F2F5A9"
            >
                <View style={styles.episodeContent}>
                    <Text
                        style={styles.episodeTextItem}
                        adjustsFontSizeToFit={true}
                        minimumFontScale={0.4}
                    >
                        {item.Tap}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    _renderNominatedItem(item, id) {
        const { navigate, goBack } = this.props.navigation
        const resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
                NavigationActions.navigate({ routeName: 'Details', params: { item } }),
            ],
        });
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.dispatch(resetAction)}>
                <View style={styles.itemContent}>
                    <Image style={styles.itemImage} source={{ uri: item.Anh }} />
                    <Text style={styles.textItem}>{item.TenPhim}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        const { navigate } = this.props.navigation
        const { goBack } = this.props.navigation
        if (!this.state.arrDetails.length) {
            return (
                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Entypo
                                name='chevron-thin-left'
                                color="white"
                                size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onShare()}>
                            <EvilIcons
                                name='share-apple'
                                color="white"
                                size={35}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator
                            color='white'
                            size={25}
                        />
                    </View>
                </View>
            )
        }

        const params = Common.getDetailMovies(this.state.arrDetails)
        const { episodes, nominatedMovie } = params[0]
        const numofEpisodes = episodes.length
        const item = episodes[0]
        const itemNominatedMovie = nominatedMovie[0]
        const { id, image, url, name, realName, nowShowing, comingSoon, director, cast, kind, country, time, view, reviews, numOfYears, content, imageContent } = params[0]
        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Entypo
                            name='chevron-thin-left'
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onShare()}>
                        <EvilIcons
                            name='share-apple'
                            color="white"
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollDetails}>
                    <ImageBackground
                        style={styles.thumbnail}
                        source={{ uri: imageContent }}
                    >
                        <TouchableWithoutFeedback onPress={() => navigate('VideoView', { item, name })}>
                            <View style={styles.buttonPlay}>
                                <AntDesign
                                    style={styles.iconPlay}
                                    name="playcircleo"
                                    size={60}
                                    color={'white'}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{name}</Text>
                        </View>
                        <View style={styles.subTitle}>
                            <Text style={styles.subTitleText}>{numOfYears}</Text>
                            <Text style={styles.subTitleText}>{time}</Text>
                            <Text style={styles.subTitleText}>{view} Lượt xem</Text>
                        </View>
                        <View style={styles.content}>
                            <Image style={styles.imageContent} source={{ uri: image }}></Image>
                            <View style={styles.textContent}>
                                <ReadMore
                                    numberOfLines={4}
                                    renderTruncatedFooter={this._renderTruncatedFooter}
                                    renderRevealedFooter={this._renderRevealedFooter}
                                >
                                    <Text style={styles.normalText}>{content}</Text>
                                </ReadMore>
                            </View>
                        </View>
                        {numofEpisodes != 1 ?
                            <View style={styles.listSeason}>
                                <Text style={[styles.title, styles.normalText]}>Danh sách tập</Text>
                                <View style={styles.containerSeason}>
                                    <FlatList
                                        numColumns={5}
                                        columnWrapperStyle={{ marginTop: 5, maginLeft: 5, marginRight: 5 }}
                                        data={episodes}
                                        keyExtractor = {item => item.Tap}                                                                 
                                        renderItem={({ item }) => this._renderEpisodes(item)}
                                    />
                                </View>
                            </View> : null
                        }
                        <Text style={[{ paddingTop: 15, paddingBottom: 10 }, styles.normalText]}>Thông tin</Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoTitle}>Đang phát :</Text>
                            <Text style={[{ width: width - (width / 5) }, styles.normalText]}>{nowShowing}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoTitle}>Sắp chiếu :</Text>
                            <Text style={[{ width: width - (width / 5) }, styles.normalText]}>{comingSoon}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoTitle}>Diễn viên :</Text>
                            <Text style={[{ width: width - (width / 5) }, styles.normalText]}>{cast}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoTitle}>Thể loại :</Text>
                            <Text style={[{ width: width - (width / 5) }, styles.normalText]}>{kind}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoTitle}>Quốc gia :</Text>
                            <Text style={[{ width: width - (width / 5) }, styles.normalText]}>{country}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoTitle}>Lượt đánh giá :</Text>
                            <Text style={[{ width: width - (width / 5) }, styles.normalText]}>{reviews}</Text>
                        </View>
                        <View style={{ flex: 1, paddingTop: 10 }}>
                            <Text style={[styles.title, styles.normalText]}>Phim liên quan</Text>
                            <FlatList
                                style={{ flex: 1, paddingTop: 10 }}
                                data={nominatedMovie}
                                numColumns={3}
                                keyExtractor={item => item.Key}
                                renderItem={({ item }) => this._renderNominatedItem(item)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    containerSeason: {
        alignItems: 'center',
        paddingTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    ScrollDetails: {
        flex: 1
    },
    watchVideo: {
        flex: 0.8
    },
    thumbnail: {
        flex: 1,
        width: width,
        height: 240,
        resizeMode: 'cover'
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    iconPlay: {
        opacity: 0.9
    },
    descriptionContainer: {
        paddingHorizontal: 15
    },
    title: {
        paddingTop: 6,
    },
    titleText: {
        fontSize: 19,
        color: 'white'
    },
    titleTextSmall: {
        fontSize: 15,
        color: 'white'
    },
    subTitle: {
        flexDirection: 'row',
        marginTop: 6,
    },
    subTitleText: {
        marginRight: 15,
        fontSize: 15,
        color: '#b3b3b3'
    },
    content: {
        paddingTop: 25,
        flexDirection: 'row'
    },
    imageContent: {
        width: width / 4,
        height: 140,
        paddingHorizontal: 10
    },
    textContent: {
        width: width - (width / 3.8),
        paddingHorizontal: 10,
    },
    normalText: {
        fontSize: 15,
        color: '#FCF8F8',
        lineHeight: 22
    },
    listSeason: {
        paddingTop: 10,
        flexDirection: 'column'
    },
    containerNoSelected: {
        borderBottomWidth: 3,
        borderColor: 'transparent',
    },
    textNoSelected: {
        fontSize: 25,
        paddingBottom: 2,
        color: '#b3b3b3'
    },
    listInfor: {
        paddingTop: 10,
        flexDirection: 'column'
    },
    infoContainer: {
        paddingTop: 5,
        flexDirection: 'row',
    },
    infoTitle: {
        marginRight: 3,
        fontSize: 15,
        color: '#b3b3b3'
    },
    episodeContent: {
        width: width / 5.7,
        height: 40,
        borderColor: '#F7F8E0',
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    episodeTextItem: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center'
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
        width: 120,
        color: '#FFFFFF',
        marginBottom: 20,
        fontSize: 13,
    },
});

export default Details;