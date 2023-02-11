import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';
import style from './style';
import {textConstants} from '../../../constants/textConstants/textConstants';
import DefaultButton from '../../../component/DefaultButton';
import DefaultHeader from '../../../component/DefaultHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {BoldText, RegularText} from '../../../component/CommonText';
import colors from '../../../constants/colorConstsnts/colors';
import Typography from '../../../constants/fontConstants/fonts';
const dummyArray = [
  {
    id: '1',
    title: 'Be yourself.',
    desc: 'Make sure your photos ,age,and bio are true to who you are.',
  },
  {
    id: '2',
    title: 'Stay Safe.',
    desc: "Don't be too quick to give out personal information.",
    link: {
      name: 'Date Safely',
      link: 'https://hotpot.ai/icon-resizer',
    },
  },
  {
    id: '3',
    title: 'Play it cool.',
    desc: 'Respect others and treat them as you would like to be treated.',
  },
  {id: '4', title: 'Be proactive.', desc: 'Always report bad behavior.'},
];

const TermAndCondition = () => {
  return (
    <View style={style.container}>
      <DefaultHeader />
      <View style={style.imageView}>
        <Image
          // source={{
          //   uri: 'https://img.favpng.com/6/17/5/vector-graphics-cartoon-drawing-image-clip-art-png-favpng-ssS12XjzLhR2bXERFCjRCLryR.jpg',
          // }}
          source={require('../../../assets/images/MyProfile/man.png')}
          style={style.imagestyle}
          resizeMode={'contain'}
        />
        <View style={style.forgotPasswordView}>
          <BoldText
            style={style.forgotText}
            title={textConstants.login.privicyTitle}
          />
        </View>
        <View style={style.forgotPasswordView}>
          <RegularText
            style={style.forgotText1}
            title={textConstants.login.privicyDesc}
            // title={'Please follow these House Rules.'}
          />
        </View>
      </View>
      <View style={{flex: 1, width: '100%'}}>
        <FlatList
          data={dummyArray}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => {
            return (
              <View style={{paddingHorizontal: 50, paddingVertical: 10}}>
                <View style={{flexDirection: 'row', padding: 0}}>
                  <Icon name="checkmark-sharp" size={30} color={colors.Pink} />
                  <RegularText
                    style={{
                      marginLeft: 15,
                      color: colors.grey,
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}
                    title={item.title}
                  />
                </View>
                <Text style={style.forgotText1}>
                  {item.desc}

                  {item.link?.name ? (
                    <Text
                      onPress={() => Alert('open online linking')}
                      style={{
                        color: colors.Pink,
                        textDecorationLine: 'underline',
                        textDecorationColor: 'white',
                      }}>
                      {' ' + item?.link?.name}
                    </Text>
                  ) : null}
                </Text>
              </View>
            );
          }}
        />
        <View style={style.buttonViewText}>
          <DefaultButton title={textConstants.login.privicyButton} />
        </View>
      </View>
    </View>
  );
};

export default TermAndCondition;
