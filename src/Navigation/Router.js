import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TemplateSelectionScreen from '../Screens/TemplateSelectionScreen';
import TemplateEditScreen from '../Screens/TemplateEditScreen';


const Stack = createStackNavigator();
 
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={TemplateSelectionScreen}
          options={{
            title: 'Select Template',
          }}
        />
        <Stack.Screen
          name={'Create Poster'}
          component={TemplateEditScreen}
          options={{
            title: 'Create Poster',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
