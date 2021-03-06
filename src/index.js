import React, { Component } from 'react'
import { BackHandler, Alert, ToastAndroid, NetInfo } from 'react-native'
import { Provider, connect } from 'react-redux'
import { StackNavigator, NavigationActions } from 'react-navigation'
import RNExitApp from 'react-native-exit-app';
import Routes from './config/routes'
import OneSignal from 'react-native-onesignal';
import getStore from './store'
import Orientation from 'react-native-orientation'

const Navigator = StackNavigator(Routes, {
    headerMode: 'screen',
    initialRouteName: 'Splash',
})

const navReducer = (state, action) => {
    const newState = Navigator.router.getStateForAction(action, state)
    return newState || state
}

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doubleBackToExitPressedOnce: false,
            connectionInfo: ''
        }
        OneSignal.init("8950eea8-c865-4338-b605-ac132a15ab32");
        this.onBackPress = this.onBackPress.bind(this);
        this.handleFirstConnectivityChange = this.handleFirstConnectivityChange.bind(this);

    }

    handleFirstConnectivityChange(connectionInfo) {
        this.setState({
            connectionInfo: connectionInfo.type
        })
        if(this.state.connectionInfo == 'none' && this.props.nav.routes.length == 1){
            Alert.alert('Lỗi kết nối !', 'Bạn hãy kiểm tra lại kết nối mạng và mở lại ứng dụng', [{ text: 'OK' , onPress: () => RNExitApp.exitApp() }])
        } 
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentDidMount(){
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            this.setState({
                connectionInfo: connectionInfo.type
            })
        });
        NetInfo.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );       
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
        NetInfo.removeEventListener(
            'connectionChange',
            handleFirstConnectivityChange
        );
    }

    onBackPress() {
        const { dispatch, nav } = this.props;
        if (nav.index < 2) {
            if (this.state.doubleBackToExitPressedOnce) {
                RNExitApp.exitApp();
            }
            ToastAndroid.show('Ấn lần nữa để thoát', ToastAndroid.SHORT);
            this.setState({ doubleBackToExitPressedOnce: true });
            setTimeout(() => {
                this.setState({ doubleBackToExitPressedOnce: false });
            }, 1000);       
            return true;
        }
        dispatch(NavigationActions.back());
        Orientation.lockToPortrait();
        return true;
    }

    render() {
        const navigation = {
            dispatch: this.props.dispatch,
            state: this.props.nav,
        };
        return (
            <Navigator
                navigation={navigation}
            />
        )
    }
}

const store = getStore(navReducer)
const AppIndex = connect(state => ({ nav: state.nav }))(App)

export default Index = () => {
    return (
        <Provider store={store}>
            <AppIndex />
        </Provider>
    )
}