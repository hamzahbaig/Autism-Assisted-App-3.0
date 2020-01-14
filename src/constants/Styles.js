import {StyleSheet, Dimensions} from 'react-native';
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mainHeadingContainer: {
    width: '100%',
    marginTop: 20,
  },
  mainHeadingFont: {
    color: 'black',
  },
  descriptionContainer: {
    width: '100%',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#e4e4e4",
  },
  scrollViewContainer: {
    height: '100%',
    width: phoneWidth,
    marginTop: 20,
    marginBottom: 10,
  },
  innerScrollViewContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  sectionContainer: {
    width: '100%',
    marginTop: 10,
  },
  sectionStyling: {
    color: '#04B874',
  },
  bannerContainer: {
    width: phoneWidth,
    height: phoneHeight*.10,
    backgroundColor: '#04B874',
    justifyContent: 'center',
  },
  contentDescriptionContainer: {
    width: '100%',
    marginTop: 10,
  },
  innerSectionContainerTitle: {
    width: '100%',
    marginTop: 10,
  },
  innerSectionContainerDescription: {
    width: '100%',
    marginTop: 10,
  },
  footerSectionContainer: {
    width: '100%',
    marginTop: 10,
  },
});
