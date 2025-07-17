import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import SignUpScreen from './screens/signup_screen';
import LoginScreen from './screens/login_screen';
import HomeScreen from './screens/home_screen';
import MainTabs from './screens/main_tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = 'SignUp' component={SignUpScreen} />
        <Stack.Screen name = 'Login' component={LoginScreen} />
        <Stack.Screen name = 'Home' component={HomeScreen} />
        <Stack.Screen name = 'MainTabs' component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




/**export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});**/