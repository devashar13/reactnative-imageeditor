import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import styles from './styles';
import {rawImages} from '../../Data/rawImages';
const TemplateSelectionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={rawImages}
        renderItem={({item}) => (
          <View style={{height: 200, width: 200,margin:10,padding:10}}>
            <Pressable onPress={() => {navigation.navigate("Create Poster",{
                          id: item.id,
              
            })}}>
              <Image
                source={{uri: item.url}}
                style={{width: 200, height: 200}}
              />
            </Pressable>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default TemplateSelectionScreen;
