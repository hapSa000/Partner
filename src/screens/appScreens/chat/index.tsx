import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import DefaultButton from '../../../component/DefaultButton';
import {textConstants} from '../../../constants/textConstants/textConstants';
import {MediumText} from '../../../component/CommonText';
import DefaultHeader from '../../../component/DefaultHeader';
import TextInputView from '../../../component/InputField/index';
import styles from './style';
import colors from '../../../constants/colorConstsnts/colors';
import {Image, FlatList} from 'react-native';
import images from '../../../constants/imageConstants/images';
export default Chat = ({navigation}: any) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View
        style={{
          // flex: 0.07,
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            // flex: 0.07,
            // backgroundColor: 'red',
            alignItems: 'center',
            // justifyContent: 'space-around',
            padding: 0,
            flexDirection: 'row',
          }}>
          <Image source={images.Logo} style={{width: 35, height: 35}} />
          <Text
            style={{
              paddingLeft: 0,
              color: colors.Secondary,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Partner
          </Text>
        </View>
        <View style={{backgroundColor: 'red'}}>
          <Image source={images.Logo} style={{width: 35, height: 35}} />
        </View>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: 'transparent',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={images.logoNoBack} style={{width: 15, height: 15}} />
        <TextInput
          placeholder="Search here..."
          style={{
            marginLeft: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'red',
            width: '90%',
          }}
        />
      </View>
      <View style={{paddingLeft: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
          New Matches
        </Text>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[
              {id: 1, name: 'sanjeev'},
              {id: 1, name: 'sanjeev'},
              {id: 1, name: 'sanjeev'},
              {id: 1, name: 'sanjeev'},
            ]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: 80,
                    height: 100,
                    backgroundColor: 'red',
                    margin: 10,
                    borderRadius: 8,
                  }}>
                  <Text>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={{padding: 10, flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
          Messages
        </Text>
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 10,
            padding: 0,
            width: 18,
            height: 23,
            marginLeft: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.White, fontSize: 13}}>{'1'}</Text>
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <FlatList
          data={[
            {
              id: 1,
              name: 'sanjeev',
              message: 'How are you?',
              image:
                'https://c1.wallpaperflare.com/preview/129/82/484/stylish-boy-fashion-man-s-fashion-blurry-background.jpg',
            },
            {
              id: 2,
              name: 'rohit',
              message: 'Hello',
              image:
                'https://c4.wallpaperflare.com/wallpaper/212/554/446/attitude-attractive-beard-boy-wallpaper-thumb.jpg',
            },
          ]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  paddingVertical: 10,
                }}>
                <View
                  style={
                    {
                      // width: 100,
                      // height: 100,
                      // borderColor: 'red',
                      // borderWidth: 1,
                      // borderRadius: 50,
                    }
                  }>
                  <Image
                    source={{
                      uri: 'https://c4.wallpaperflare.com/wallpaper/212/554/446/attitude-attractive-beard-boy-wallpaper-thumb.jpg',
                    }}
                    style={{
                      borderColor: 'red',
                      height: 80,
                      width: 80,
                      borderWidth: 1,
                      borderRadius: 50,
                    }}
                    resizeMode={'cover'}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    borderBottomColor: colors.lightGrey,
                    borderBottomWidth: 2,
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: colors.Black,
                    }}>
                    {item.name}
                  </Text>
                  <Text numberOfLines={1}>{item.message}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
