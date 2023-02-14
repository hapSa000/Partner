import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import style from './style';
import {BoldText, RegularText} from '../CommonText';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../constants/colorConstsnts/colors';
import {CurveButton} from '../CurveButton';

const DeskSwipeCard = () => {
  return (
    <View
      style={{
        height: hp('70%'),
        borderWidth: 2,
        borderColor: colors.Primary,
        borderRadius: 20,
      }}>
      <View style={style.card}>
        <ImageBackground
          imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
          style={{flex: 1, justifyContent: 'flex-end', borderRadius: 20}}
          source={{
            uri: 'https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingHorizontal: 20,
            }}>
            <BoldText
              style={{fontSize: hp('6%'), color: 'white', fontWeight: '900'}}
              title={'Mona'}
            />
            <BoldText
              style={{fontSize: hp('6%'), color: 'white'}}
              title={' ,'}
            />
            <BoldText
              style={{fontSize: hp('6%'), color: 'white'}}
              title={'23'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingHorizontal: 20,
            }}>
            <RegularText
              style={{fontSize: hp('3%'), color: 'white', fontWeight: '900'}}
              title={'Lives in Jaipur'}
            />
          </View>
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              marginHorizontal: 10,
              paddingHorizontal: 20,
            }}>
            <RegularText
              style={{fontSize: hp('3%'), color: 'white', fontWeight: '900'}}
              title={'6 miles away'}
            />
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 0.2,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <TouchableOpacity>
          <CurveButton style={{width: hp('30%')}} title={'View Profile'} />
          {/* <BoldText style={{color: 'black'}} title={'View Profile'} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeskSwipeCard;
