import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardBox from '../components/CardBox';
import SearchBox from '../components/SearchBox';
import {Fonts} from '../assets/fonts/Fonts';
import eng from '../assets/language/eng.json';
import urdu from '../assets/language/urdu.json'
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  state = {
    currentLanguage: "eng",
    content: urdu
  }
  componentDidMount() {
    // if(this.state.currentLanguage == "eng") {
    //   this.setState({content: eng})
    // } else {
    //   this.setState({content: urdu})
    // }
  }
  static navigationOptions = {
    headerRight: () => (
      <View style={styles.settingIconContainer}>
        <Icon name="md-settings" size={28} color="white" onPress={()=>alert(1)} />
      </View>
    ),
    headerLeft: () => (
      <View style={styles.searchBarContainer}>
        <SearchBox/>
      </View>
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <View style={styles.mainHeadingContainer}>
          <Text style={styles.mainHeadingFont}>
            {this.state.content['homeScreen']['title']}
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <CardBox title={this.state.content['homeScreen']['category'][0]} />
          <CardBox title={this.state.content['homeScreen']['category'][1]} />
        </View>
        <View style={styles.rowContainer}>
          <CardBox title={this.state.content['homeScreen']['category'][2]} />
          <CardBox title={this.state.content['homeScreen']['category'][3]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  mainHeadingContainer: {
    width: '100%',
    height: '4%',
    marginTop: 20,
  },
  mainHeadingFont: {
    fontSize: 20,
    color: '#707070',
    fontFamily: Fonts.nafees
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: phoneHeight * 0.22,
    marginTop: 20,
  },
  settingIconContainer: {
    width: phoneWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: phoneWidth * 0.9,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
