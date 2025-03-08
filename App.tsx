import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen'; 
import FifthScreen from './FifthScreen';
import SixthScreen from './SixthScreen';
import SeventhScreen from './SeventhScreen';
import EighthScreen from './EighthScreen';
import QRScanner from './QRScanner';



export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  Fourth: undefined; 
  Fifth: undefined;
  Sixth: undefined;
  Seventh: undefined;
  Eighth: undefined;
  QRScanner: undefined;


};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Second" component={SecondScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Third" component={ThirdScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Fourth" component={FourthScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Fifth" component={FifthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sixth" component={SixthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Seventh" component={SeventhScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Eighth" component={EighthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
