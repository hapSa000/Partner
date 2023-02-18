import { Button, StyleSheet, Text, ImageBackground, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import DeskSwipeCard from '../../../component/HomeSwipeCard/DeskSwipeCard';
import HomeHeader from '../../../component/HomeHeader/HomeHeader';
import {MainContainer} from '../../../component/MainContainer';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BoldText } from '../../../component/CommonText';

<<<<<<< HEAD

const index = () => {
=======
const Home = () => {
>>>>>>> ca9eea186ee400e12ce24a839a31f28531496faf
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <HomeHeader />
      </View>
      <View style={{flex: 0.8}}>
        <Swiper
        containerStyle={{backgroundColor:'transparent'}}
          cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={card => {
            return <DeskSwipeCard />;
          }}
          onSwiped={cardIndex => {
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
<<<<<<< HEAD

export default index;
=======
export default Home;
>>>>>>> ca9eea186ee400e12ce24a839a31f28531496faf

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
