import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Button,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBox from '../components/SearchBox';
import {Fonts} from '../assets/fonts/Fonts';
import CategoryBox from '../components/CategoryBox';
import {engFontSizes} from '../settings/EnglishFontConfig';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export default class AutismInChildren extends React.Component {
  state = {
    fontSize: engFontSizes.eng_M,
  };

  static navigationOptions = {
    headerRight: () => (
      <View style={styles.settingIconContainer}>
        <Icon name="md-settings" size={28} color="white" />
      </View>
    ),
    headerLeft: () => (
      <View style={styles.searchBarContainer}>
        <SearchBox />
      </View>
    ),
  };
  fontSizeHandler = key => {
    if (key == 's') {
      this.setState({fontSize: engFontSizes.eng_S});
    } else if (key == 'm') {
      this.setState({fontSize: engFontSizes.eng_M});
    } else {
      this.setState({fontSize: engFontSizes.eng_L});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2C326F" barStyle="light-content" />
        <View style={styles.mainHeadingContainer}>
          <Text
            style={[
              styles.mainHeadingFont,
              {fontSize: this.state.fontSize.heading},
            ]}>
            Autism in Children
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            style={[
              styles.descriptionStyle,
              {fontSize: this.state.fontSize.content},
            ]}>
            Learn important information about autism spectrum disorder in
            children and making sure your children get the help and attention
            they require
          </Text>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.innerScrollViewContainer}>
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {fontSize: this.state.fontSize.heading},
                ]}>
                Section 1: Development in Children
              </Text>
            </View>
            <CategoryBox fontSize={this.state.fontSize} />
            <CategoryBox fontSize={this.state.fontSize} />
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {fontSize: this.state.fontSize.heading},
                ]}>
                Section 2: Testing For Autism
              </Text>
            </View>
            <CategoryBox fontSize={this.state.fontSize} />
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {fontSize: this.state.fontSize.heading},
                ]}>
                Section 3: Treating Autism
              </Text>
            </View>
            <CategoryBox fontSize={this.state.fontSize} />
            <CategoryBox fontSize={this.state.fontSize} />
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {fontSize: this.state.fontSize.heading},
                ]}>
                Section 4: Autism & Society
              </Text>
            </View>
            <CategoryBox fontSize={this.state.fontSize} />
            <CategoryBox fontSize={this.state.fontSize} />
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.sectionStyling,
                  {fontSize: this.state.fontSize.heading},
                ]}>
                Section 5: Autism and Nutrition
              </Text>
            </View>
            <CategoryBox fontSize={this.state.fontSize} />
            <CategoryBox fontSize={this.state.fontSize} />
            <Button title={'Small'} onPress={() => this.fontSizeHandler('s')} />
            <Button
              title={'Medium'}
              onPress={() => this.fontSizeHandler('m')}
            />
            <Button title={'Large'} onPress={() => this.fontSizeHandler('l')} />
          </View>
        </ScrollView>
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
  },
  mainHeadingContainer: {
    width: '100%',
    height: '4%',
    marginTop: 20,
  },
  mainHeadingFont: {
    color: '#707070',
    fontFamily: Fonts.avenirBlack,
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
  descriptionContainer: {
    width: '100%',
    marginTop: 20,
  },
  descriptionStyle: {
    fontFamily: Fonts.avenirLight,
    lineHeight: 15,
  },
  sectionContainer: {
    width: '100%',
    marginTop: 10,
  },
  sectionStyling: {
    color: '#04B874',
    fontFamily: Fonts.avenirBlack,
  },
  scrollViewContainer: {
    height: '100%',
    width: phoneWidth,
    marginTop: 20,
  },
  innerScrollViewContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});
