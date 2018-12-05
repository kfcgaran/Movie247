import React, { Component } from 'react'
import { BackHandler, Alert, ToastAndroid } from 'react-native'
import { Provider, connect } from 'react-redux'
import { StackNavigator, NavigationActions } from 'react-navigation'
import RNExitApp from 'react-native-exit-app';
import Routes from './config/routes'

import getStore from './store'

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
            doubleBackToExitPressedOnce: false
        }
        this.onBackPress = this.onBackPress.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress() {
        const { dispatch, nav } = this.props;
        if (nav.index < 2) {
            this.clickAgainToExit()
            return true;
        }
        dispatch(NavigationActions.back());
        return true;
    }

    clickAgainToExit(){
        if (this.state.doubleBackToExitPressedOnce) {
            RNExitApp.exitApp();
        }
        ToastAndroid.show('Ấn lần nữa để thoát', ToastAndroid.SHORT);
        this.setState({ doubleBackToExitPressedOnce: true });
        setTimeout(() => {
            this.setState({ doubleBackToExitPressedOnce: false });
        }, 1000);       
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