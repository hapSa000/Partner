import { Button, StyleSheet, Text, ImageBackground, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import DeskSwipeCard from '../../../component/HomeSwipeCard/DeskSwipeCard';
import HomeHeader from '../../../component/HomeHeader/HomeHeader';
import {MainContainer} from '../../../component/MainContainer';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BoldText } from '../../../component/CommonText';


const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <HomeHeader />
      </View>
      <View style={{flex: 0.8}}>
        <Swiper
        containerStyle={{backgroundColor:'transparent'}}
          cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={(card: any) => {
            return <DeskSwipeCard />;
          }}
          onSwiped={(cardIndex: any) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          stackSize={3}></Swiper>
      </View>
     
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});
