import React, {Component} from 'react'
import { Provider, connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import Routes from './config/routes'

import getStore from './store'

const Navigator = StackNavigator(Routes, {
    headerMode: 'screen',
    initialRouteName: 'Splash'
})

const navReducer = (state, action) => {
    const newState = Navigator.router.getStateForAction(action, state)
    return newState || state
}

class App extends Component {
    render(){
        const navigation = {
            dispatch: this.props.dispatch,
            state: this.props.nav,
        };
        return (
            <Navigator 
                navigation = {navigation}              
            />
        )
    }
}

const store = getStore(navReducer)
const AppIndex = connect( state => ({ nav: state.nav }))(App)

export default Index = () => {
    return (
        <Provider store={store}>
            <AppIndex />
        </Provider>
    )
}