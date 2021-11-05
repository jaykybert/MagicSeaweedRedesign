// React & Navigation
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Components
import HomescreenStack from './screens/HomescreenStack';


/** 
 *  @function App
 *  Entry point of application.
 *  Return a HomescreenStack inside a NavigationContainer.
 */
export default function App() {
  return (
    <NavigationContainer style={AppStyles.container}>
      <HomescreenStack/>
    </NavigationContainer>
  );
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
