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
    language: Settings.currentLanguage,
    fontSize: Settings.currentFontSettings,
    languageActiveUrdu: false,
    languageActiveEnglish: false,
    fontSizeSmall: false,
    fontSizeMedium: false,
    fontSizeLarge: false,
  };

  componentDidMount() {
    if (this.state.language == 'english') {
      this.setState({languageActiveEnglish: true});
    } else if (this.state.language == 'urdu') {
      this.setState({languageActiveUrdu: true});
    }
    if (this.state.fontSize == 's') {
      this.setState({fontSizeSmall: true});
    } else if (this.state.fontSize == 'm') {
      this.setState({fontSizeMedium: true});
    } else if (this.state.fontSize == 'l') {
      this.setState({fontSizeLarge: true});
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  selectionHandler = key => {
    if (key == 'languageActiveUrdu') {
      this.setState({languageActiveUrdu: !this.state.languageActiveUrdu});
      this.setState({languageActiveEnglish: !this.state.languageActiveEnglish});
    } else if (key == 'languageActiveEnglish') {
      this.setState({languageActiveEnglish: !this.state.languageActiveEnglish});
      this.setState({languageActiveUrdu: !this.state.languageActiveUrdu});
    } else if (key == 'fontSizeSmall') {
      this.setState({fontSizeSmall: !this.state.fontSizeSmall});
      this.setState({fontSizeLarge: false});
      this.setState({fontSizeMedium: false});
    } else if (key == 'fontSizeMedium') {
      this.setState({fontSizeSmall: false});
      this.setState({fontSizeLarge: false});
      this.setState({fontSizeMedium: !this.state.fontSizeMedium});
    } else if (key == 'fontSizeLarge') {
      this.setState({fontSizeSmall: false});
      this.setState({fontSizeLarge: !this.state.fontSizeLarge});
      this.setState({fontSizeMedium: false});
    }
  };
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
                <Text style={[{marginHorizontal: 15}]}>Language</Text>
                <View style={styles.outerButttonContainer}>
                  <TouchableOpacity
                    onPress={() => this.selectionHandler('languageActiveUrdu')}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor: this.state.languageActiveUrdu
                          ? '#2C326F'
                          : 'white',
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: this.state.languageActiveUrdu
                          ? 'white'
                          : '#707070',
                      }}>
                      اردو
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor: this.state.languageActiveEnglish
                          ? '#2C326F'
                          : 'white',
                      },
                    ]}
                    onPress={() =>
                      this.selectionHandler('languageActiveEnglish')
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: this.state.languageActiveEnglish
                          ? 'white'
                          : '#707070',
                      }}>
                      English
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.settingsContainer}>
                <Text style={{marginHorizontal: 15}}>TextSize</Text>
                <View style={styles.outerButttonContainer}>
                  <TouchableOpacity
                    onPress={() => this.selectionHandler('fontSizeSmall')}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor: this.state.fontSizeSmall
                          ? '#2C326F'
                          : 'white',
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: this.state.fontSizeSmall ? 'white' : '#707070',
                      }}>
                      Small
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.selectionHandler('fontSizeMedium')}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor: this.state.fontSizeMedium
                          ? '#2C326F'
                          : 'white',
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: this.state.fontSizeMedium ? 'white' : '#707070',
                      }}>
                      Medium
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.selectionHandler('fontSizeLarge')}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor: this.state.fontSizeLarge
                          ? '#2C326F'
                          : 'white',
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: this.state.fontSizeLarge ? 'white' : '#707070',
                      }}>
                      Large
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.settingsContainer}>
                <Text style={{marginHorizontal: 15}}>Contrast</Text>
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
