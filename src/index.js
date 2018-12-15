import React, { Component } from 'react'
import { BackHandler, Alert, ToastAndroid } from 'react-native'
import { Provider, connect } from 'react-redux'
import { StackNavigator, NavigationActions } from 'react-navigation'
import RNExitApp from 'react-native-exit-app';
import Routes from './config/routes'
import OneSignal from 'react-native-onesignal';
import getStore from './store'
import Orientation from 'react-native-orientation'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

const Navigator = StackNavigator(Routes, {
    headerMode: 'screen',
    initialRouteName: 'Splash',
})

const setInitialNotification = openResult => ({
    type: T.INITIAL_NOTIFICATION,
    payload: openResult.notification.payload.additionalData
});

// function to initially add onOpened listener to
// handles initial tap of push notification from an unopened AppState
const handleOnOpened = openResult => {
    console.log(`** INITIAL OPEN RESULT FROM APP.JS **`, openResult);
    console.log("Message: ", openResult.notification.payload.body);
    console.log("Data: ", openResult.notification.payload.additionalData);
    console.log("isActive: ", openResult.notification.isAppInFocus);
    console.log("openResult: ", openResult);

    store.dispatch(setInitialNotification(openResult));
};

const navReducer = (state, action) => {
    const newState = Navigator.router.getStateForAction(action, state)
    return newState || state
}

OneSignal.configure({});
OneSignal.addEventListener("opened", handleOnOpened);

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doubleBackToExitPressedOnce: false
        }
        //this._addListener = addListener;
        this.onBackPress = this.onBackPress.bind(this);
        OneSignal.init("8950eea8-c865-4338-b605-ac132a15ab32");
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);

    }

    onOpened(openResult) {
        alert('Message: ', openResult.notification.payload.body);
        alert('Data: ', openResult.notification.payload.additionalData);
        alert('isActive: ', openResult.notification.isAppInFocus);
        alert('openResult: ', openResult);
    }

    onIds(device) {
        alert('Device info: ', device);
    }

    onReceived(notification) {
        alert("Notification received: ", notification);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
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
            addListener: this._addListener
        };
        return (
            <Navigator
                navigation={navigation}
            />
        )
    }
}

const store = getStore(navReducer, middleware)
const AppIndex = connect(state => ({ nav: state.nav }))(App)

export default Index = () => {
    return (
        <Provider store={store}>
            <AppIndex />
        </Provider>
    )
}