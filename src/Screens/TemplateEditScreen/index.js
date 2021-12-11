import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {captureRef} from 'react-native-view-shot';
import {useRef} from 'react/cjs/react.development';
import Template from '../../Components/Template';
import {images} from '../../Data/images';
import Share from 'react-native-share';

const TemplateEditScreen = ({route, navigation}) => {
  const {id} = route.params;
  const [text, setText] = useState('');
  const viewRef = useRef();
  const [imageUrl, setImageUrl] = useState({});
  const shareDummyImage = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.7,
      });
      await Share.open({url: uri});
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    img = images
      .filter(function (image) {
        return image.id == id;
      })
    setImageUrl(img[0]);
  }, []);
  return (
    <View style={{justifyContent:"center",width:"100%",height:"100%",marginLeft:Dimensions.get("window").width/8}}>
    <View ref={viewRef} >
      {Object.keys(imageUrl).length === 0?<Text>No</Text>:<Template image={imageUrl}  />}

    </View>
    <TouchableOpacity onPress={shareDummyImage}>
        <Text style={{backgroundColor:"red",padding:10,color:"white",width:130,margin:20,borderRadius:10,borderWidth:1 }}>Share Poster</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TemplateEditScreen;