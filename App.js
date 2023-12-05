// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/screens/Home';
import TransHistory from './src/screens/TransHistory';
import CoinDetails from './src/screens/CoinDetails';
import Send from './src/screens/Send';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wallet">
        <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="transactionHistory" component={TransHistory} options={{headerShown:false}}/>
        <Stack.Screen name="send" component={Send} options={{headerShown:false}}/>
        <Stack.Screen name="coinDetail" component={CoinDetails} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
