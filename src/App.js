import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, AsyncStorage } from 'react-native';

import { connect } from 'react-redux'

import ListMoviesHome from './components/ListMoviesHome';
import Slide from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';
import Category from './components/Category'
import GridListMovies from './components/GridListMovies'
import Orientation from 'react-native-orientation'
import SideMenu from 'react-native-side-menu';
import { AfterInteractions } from 'react-native-interactions';
import { getData } from './action';

//console.disableYellowBox = true;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      itemSelected: 'Trang Chủ',
      arr: []
    }
    this.itemSelected = this.itemSelected.bind(this)
  }

  static navigationOptions = {
    headerVisible: false
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  itemSelected(item) {
    this.setState({
      itemSelected: item,
      isOpen: false,
    })
  }

  componentWillMount() {
    Orientation.lockToPortrait()
  }

  updateMenu(isOpen) {
    this.setState({ isOpen })
  }

  _renderMenu() {
    if (this.state.itemSelected == 'Trang Chủ') {
      return (
        <ScrollView style={{ flex: 1 }}>
          <Slide 
            navigation={this.props.navigation}
          />
          <ListMoviesHome
            navigation={this.props.navigation}
          />
        </ScrollView>
      )
    }
    if (this.state.itemSelected == 'Phim Chiếu Rạp') {
      return (
        <View style={{ flex: 1 }}>
          <GridListMovies
            itemSelectedValue={'Phim Chiếu Rạp'}
            navigation={this.props.navigation}
          />
        </View>
      )
    }
    if (this.state.itemSelected == 'Thể Loại') {
      return (
        <View style={{ flex: 1 }}>
          <Category
            navigation={this.props.navigation}
            itemSelectedValue={'Thể Loại'}
          />
        </View>
      )
    }
    if (this.state.itemSelected == 'Quốc Gia') {
      return (
        <View style={{ flex: 1 }}>
          <Category
            navigation={this.props.navigation}
            itemSelectedValue={'Quốc Gia'}
          />
        </View>
      )
    }
    if (this.state.itemSelected == 'Phim Lẻ') {
      return (
        <View style={{ flex: 1 }}>
          <GridListMovies
            itemSelectedValue={'Phim Lẻ'}
            navigation={this.props.navigation}
          />
        </View>
      )
    }
    if (this.state.itemSelected == 'Phim Bộ') {
      return (
        <View style={{ flex: 1 }}>
          <GridListMovies
            itemSelectedValue={'Phim Bộ'}
            navigation={this.props.navigation}
          />
        </View>
      )
    }
    if (this.state.itemSelected == 'Bảng Xếp Hạng') {
      return (
        <View style={{ flex: 1 }}>
          <GridListMovies
            itemSelectedValue={'Bảng Xếp Hạng'}
            navigation={this.props.navigation}
          />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={[{ flex: 1 }, styles.container]}>
        <StatusBar
          backgroundColor="black"
        />
        <SideMenu
          menu={<Menu
            navigation={this.props.navigation}
            itemSelected={this.itemSelected}
            itemSelectedValue={this.state.itemSelected}
          />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
          style={{ flex: 1 }}
        >
          <View style={[{ flex: 1 }, styles.container]}>
            <Header
              navigation={this.props.navigation}
              toggle={this.toggle.bind(this)}
              itemSelectedValue={this.state.itemSelected}
            />
            {this._renderMenu()}
          </View>
        </SideMenu>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  }
});


//mapStateToProps
const mapStateToProps = state => {
  return { data: state.data }
}

export default connect(mapStateToProps)(App)