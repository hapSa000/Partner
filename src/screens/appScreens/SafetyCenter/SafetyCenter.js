import {View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RF} from '../../../constants/responsive';

import Guide from './Guide';
import Tools from './Tools';
import Resource from './Resource';

const SafetyCenter = () => {
  const [currentState, setCurrentState] = useState('1');
  const tabNavgate = value => {
    setCurrentState(value);
    console.log(value);
    if (value === '1') {
      return <Guide />;
    } else if (value === '2') {
      return <Tools />;
    } else {
      return <Resource />;
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* header in this screen */}
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          padding: RF(15),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://www.clipartmax.com/png/small/56-565031_clipart-cross-wrong-png-transparent-images-pluspng-x-icon-black-transparent.png',
          }}
          style={{
            width: RF(20),
            right: RF(90),
            height: RF(20),
          }}
        />
        <Text
          style={{
            fontSize: 17,
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Safety center
        </Text>
      </View>
      {/* tabs guide tools resource */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          padding: 0,
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
        }}>
        <TouchableOpacity
          onPress={() => tabNavgate('1')}
          style={{
            // backgroundColor: 'green',
            paddingHorizontal: 40,
            // borderColor: 'yellow',
            // borderWidth: 1,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: currentState === '1' ? 'black' : 'grey',
            }}>
            Guide
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderRightColor: 'grey',
            borderRightWidth: 2,
            height: 25,
            top: 7,
          }}
        />
        <TouchableOpacity
          onPress={() => tabNavgate('2')}
          style={{
            // backgroundColor: 'green',
            paddingHorizontal: 40,
            // borderColor: 'yellow',
            // borderWidth: 1,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: currentState === '2' ? 'black' : 'grey',
            }}>
            Tools
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderRightColor: 'grey',
            borderRightWidth: 2,
            height: 25,
            top: 7,
          }}
        />
        <TouchableOpacity
          onPress={() => tabNavgate('3')}
          style={{
            // backgroundColor: 'green',
            paddingHorizontal: 40,
            // borderColor: 'yellow',
            // borderWidth: 1,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: currentState === '3' ? 'black' : 'grey',
            }}>
            Resource
          </Text>
        </TouchableOpacity>
      </View>

      {currentState === '1' ? (
        <ScrollView
          style={{flex: 0}}
          showsVerticalScrollIndicator={false}
          scrollEnabled
          contentContainerStyle={{flexGrow: 1}}>
          <Guide />
        </ScrollView>
      ) : currentState === '2' ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 0}}
          scrollEnabled
          contentContainerStyle={{flexGrow: 1}}>
          <Tools />
        </ScrollView>
      ) : (
        <ScrollView
          style={{flex: 0}}
          showsVerticalScrollIndicator={false}
          scrollEnabled
          contentContainerStyle={{flexGrow: 1}}>
          <Resource />
        </ScrollView>
      )}
    </View>
  );
};

export default SafetyCenter;
