import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home/home';
import Products from './src/pages/products/products';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Welcome to My App',
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: "Our Products",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
