import React from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import {rawImages} from './src/Data/rawImages';
import Router from './src/Navigation/Router';
import TemplateSelectionScreen from './src/Screens/TemplateSelectionScreen/index';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Router />
    </>
  );
};

export default App;
