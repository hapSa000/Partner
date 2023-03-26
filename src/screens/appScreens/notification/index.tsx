import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from '../../../component/HomeHeader/HomeHeader';
import {Image} from 'react-native';
import colors from '../../../constants/colorConstsnts/colors';

export default Notification = () => {
  return (
    <View>
      <HomeHeader title={'Notification'} />
      {/* //notification */}
      <View
        style={{
          padding: 10,
        }}>
        <FlatList
          data={[
            {
              id: 1,
              name: 'when joined the meet',
              message: 'plople joine all people.',
              image:
                'https://c1.wallpaperflare.com/preview/129/82/484/stylish-boy-fashion-man-s-fashion-blurry-background.jpg',
            },
            {
              id: 2,
              name: 'joined with chat',
              message: 'Hello please join  8:30pm',
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
                  borderBottomColor: colors.lightGrey,
                  borderBottomWidth: 1,
                  width: '100%',
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
                      uri: item.image,
                    }}
                    style={{
                      borderColor: colors.TwinkleBlue,
                      height: 60,
                      width: 60,
                      borderWidth: 1,
                      borderRadius: 50,
                    }}
                    resizeMode={'cover'}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    // borderBottomColor: colors.lightGrey,
                    // borderBottomWidth: 2,
                    // width: '100%',
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
