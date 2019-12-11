import React, { Component } from 'react'
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { theme } from '../constants';
import Header from '../components/Header'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
const VALID_EMAIL = "test@test.com";
const VALID_PASSWORD = "test";

export class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
  }

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push('email');
    }
    if (password !== VALID_PASSWORD) {
      errors.push('password');
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      navigation.navigate("Shop");
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
    
    return (
      <KeyboardAvoidingView style={styles.login}>
        <Header />
        <View style={{padding: (0, 32)}}>
          <View>
            <Input
              label="Email"
              error={hasErrors('email')}
              labelStyle={[styles.input, hasErrors('email', )]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              labelStyle={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <TouchableOpacity  onPress={() => this.handleLogin()} style={styles.loginBtn}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> : 
                <Text style={styles.loginBtnText}>Login</Text>
              }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={{ textDecorationLine: 'underline', textAlign: 'center' }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    
    justifyContent: 'center',
  },
  input: {
    
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.primary,
  },
  loginBtn: {
    backgroundColor:'#142C79',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: (70, 70),
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color:'#fff',
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
  },
})

export default Login
