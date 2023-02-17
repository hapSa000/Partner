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
import WebOpen from '../../../component/WebView';
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

const AboutUs = (props: { navigation: any; }) => {
  const {navigation} = props;
  return (
    <View style={style.container}>
      <DefaultHeader
        onBackPress={() => navigation.goBack()}
        title={'About Us'}
      />
      <WebOpen
        URL={' https://www.incrementors.com/tools/dummy-content-generator/'}
      />
    </View>
  );
};

export default AboutUs;
