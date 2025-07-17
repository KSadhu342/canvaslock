import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { signUp } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignup = async () => {
      try {
        const user = await signUp(email, password);
        navigation.replace('MainTabs');
        console.log("Signed Up User", user.email);

        setEmail('');
        setPassword('');
      } catch (error) {
        console.error("Sign Up Error: ", error.message);
        throw error;
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="grey"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignup} />
        <Button title="Already have an account? Login" onPress = {() => navigation.navigate('Login')}/>
        
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    color: 'black',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default SignUpScreen;