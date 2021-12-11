import React, {useEffect, useRef} from 'react';
import {View, Text, Image} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react/cjs/react.development';

const Template = ({image}) => {

  const [text, setText] = useState('');
  return (
    <View>
      <Image
        source={{uri: image.url}}
        resizeMode={'cover'}
        style={{
          width: 300,
          height: 300,
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: image.top,
          left: image.left,
          right: image.right,
          height: 300,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {image.text.split(/([0-9]+)/).map(e => {
            return isNaN(e) ? (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: image.color,
                }}>
                {e}
              </Text>
            ) : (
              <TextInput
                defaultValue={e}
                textContentType=''
                onChangeText={text => setText(text)}
                style={{
                  height: 20,
                  width: 30,
                  fontSize: 20,
                  fontWeight: '700',
                  color: image.color,

                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Template;