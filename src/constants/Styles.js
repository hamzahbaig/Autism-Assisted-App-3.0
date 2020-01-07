import {StyleSheet,Dimensions} from 'react-native';
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
    height: '4%',
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
    borderColor: '#707070',
  },
  scrollViewContainer: {
    height: '100%',
    width: phoneWidth,
    marginTop: 20,
    marginBottom:10
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
});
