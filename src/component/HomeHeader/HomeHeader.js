import {View, Image} from 'react-native';
import React from 'react';
import {BoldText} from '../CommonText';
import {imageConstants} from '../../constants/imageConstants';
import TouchableView from '../TouchableView';
import style from './style';

const HomeHeader = (props) => {
  return (
    <View style={style.container}>
      <BoldText style={style.headerTitleText} title={props.title} />
      <TouchableView>
        <Image
          style={style.notificationImage}
          source={imageConstants.home.notification}
        />
      </TouchableView>
    </View>
  );
};

export default HomeHeader;
