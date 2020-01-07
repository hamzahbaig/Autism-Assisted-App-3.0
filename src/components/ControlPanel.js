import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Settings from '../settings/Settings.json';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';

export default class ControlPanel extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.setModalVisible}
          animationType={'slide'}>
          <View style={styles.container}>
            <View style={styles.modalContainer}>
              <View style={styles.exitContainer}>
                <Icon
                  name={'closecircle'}
                  size={25}
                  color={'#04B874'}
                  onPress={() => this.setModalVisible(!this.state.modalVisible)}
                />
              </View>
              <View style={styles.settingsContainer}>
                <Text
                  style={[
                    {
                      marginHorizontal: 15,
                      fontFamily: this.props.fontFamilyHeading,
                    },
                  ]}>
                  Language
                </Text>
                <View style={styles.outerButttonContainer}>
                  <TouchableOpacity
                    onPress={() => this.props.changeLanguage()}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor:
                          this.props.languageSettings == 'urdu'
                            ? '#2C326F'
                            : 'white',
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color:
                          this.props.languageSettings == 'urdu'
                            ? 'white'
                            : '#707070',
                        fontFamily: this.props.fontFamilyUrdu,
                      }}>
                      اردو
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor:
                          this.props.languageSettings == 'english'
                            ? '#2C326F'
                            : 'white',
                      },
                    ]}
                    onPress={() => this.props.changeLanguage()}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color:
                          this.props.languageSettings == 'english'
                            ? 'white'
                            : '#707070',
                        fontFamily: this.props.fontFamilyOption,
                      }}>
                      English
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.settingsContainer}>
                <Text
                  style={{
                    marginHorizontal: 15,
                    fontFamily: this.props.fontFamilyHeading,
                  }}>
                  Text Size
                </Text>
                <View style={styles.outerButttonContainer}>
                  <TouchableOpacity
                    onPress={() => this.props.fontSizeHandler('s')}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor:
                          this.props.fontSettings == 's' ? '#2C326F' : 'white',
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color:
                          this.props.fontSettings == 's' ? 'white' : '#707070',
                        fontFamily: this.props.fontFamilyOption,
                      }}>
                      Small
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.fontSizeHandler('m')}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor:
                          this.props.fontSettings == 'm' ? '#2C326F' : 'white',
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color:
                          this.props.fontSettings == 'm' ? 'white' : '#707070',
                        fontFamily: this.props.fontFamilyOption,
                      }}>
                      Medium
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.fontSizeHandler('l')}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor:
                          this.props.fontSettings == 'l' ? '#2C326F' : 'white',
                        fontFamily: this.props.fontFamilyOption,
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color:
                          this.props.fontSettings == 'l' ? 'white' : '#707070',
                        fontFamily: this.props.fontFamilyOption,
                      }}>
                      Large
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.settingsContainer}>
                <Text
                  style={{
                    marginHorizontal: 15,
                    fontFamily: this.props.fontFamilyHeading,
                  }}>
                  Contrast
                </Text>
                <View style={styles.outerButttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.buttonContainer,
                      {backgroundColor: '#FACC56', borderColor: 'white'},
                    ]}></TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttonContainer,
                      {backgroundColor: '#ACD7E5', borderColor: 'white'},
                    ]}></TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttonContainer,
                      {backgroundColor: '#1F2669', borderColor: 'white'},
                    ]}></TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <Icon1
          name="md-settings"
          size={28}
          color="white"
          onPress={() => this.setModalVisible(true)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerButttonContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    width: '26%',
    height: '30%',
    marginTop: 5,
    borderRadius: 5,
    marginLeft: 15,
    borderColor: '#2C326F',
    borderWidth: 1,
    justifyContent: 'center',
  },
  settingsContainer: {
    width: '100%',
    height: '30%',
  },
  exitContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 20,
  },
});
