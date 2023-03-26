import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {RF, wp} from '../../../constants/responsive';
import Carousel from 'react-native-reanimated-carousel';
import {Data, Categories, SubCategories} from '../Caraousel/Caraouseldata';
import styles from './styles';
const dummyData = [
  {
    id: 1,
    name: 'super Likes',
    button: 'get more',
    color: 'blue',
    icon: 'star',
  },
  {
    id: 2,
    name: 'my boosts',
    button: 'get more',
    color: 'orange',
    icon: 'star',
  },
  {
    id: 3,
    name: 'Subscriptions',

    icon: 'star',
  },
];
const CaraouselData = [
  {
    id: 1,
    title: '★ get tinder platinum™',
    button: 'get tinder platinum™',
    desc: 'Level up every you can take an action',
    icon: 'star',
    color: 'black',
  },
  {
    id: 2,
    title: 'get tinder gold™',
    button: 'get tinder gold™',
    desc: 'Level up every you can take an action',
    color: '#A47E3B',
    icon: 'star',
  },
  {
    id: 3,
    title: 'get tinder plus®',
    button: 'get tinder plus®',
    desc: 'Level up every you can take an action',
    icon: 'star',
    color: '#fc5c65',
  },
];
const width = Dimensions.get('window').width;
const Profile = () => {
  const [fill, setFill] = useState(90);
  const [pagination, setPagination] = React.useState(0);
  const [buttonData, setButtonData] = React.useState('');
  const ref = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/109/109618.png',
          }}
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>{'Settings'}</Text>
      </View>
      {/* profile iamge show  */}
      <View style={styles.profileContainer}>
        <AnimatedCircularProgress
          ref={ref}
          size={150}
          width={5}
          fill={fill}
          tintColor="#fc5c65"
          //   onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
          arcSweepAngle={280}
          lineCap="round"
          rotation={220 - 0}
          renderCap={({center}) => {
            // alert(JSON.stringify(center));
            return (
              <View style={styles.profileImage}>
                <Image
                  source={{
                    uri: 'https://i1.wp.com/pixahive.com/wp-content/uploads/2021/05/Stylish-boy-posing-on-the-street-438537-pixahive.jpg?fit=2048%2C2560&ssl=1',
                  }}
                  style={styles.profileImage1}
                />
              </View>
            );
          }}
        />
        <View style={styles.profileComplete}>
          <Text style={styles.profileCompleteText}>{fill}% complete</Text>
        </View>
      </View>
      {/* name with icon */}
      <View style={styles.nameContainer}>
        <Text style={styles.nameContainerText}>Sanjeev ,23</Text>
        <Image
          source={{
            uri: 'https://image.similarpng.com/very-thumbnail/2020/09/Right-mark-icon-on-transparent-background-PNG.png',
          }}
          style={styles.nameContainerImage}
        />
      </View>
      <View>
        <View>
          <FlatList
            horizontal
            data={dummyData}
            style={styles.flatlist}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles.card}>
                  {/* <Image
                    source={{
                      uri: 'https://image.similarpng.com/very-thumbnail/2020/09/Right-mark-icon-on-transparent-background-PNG.png',
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      margin: 20,
                      borderRadius: 50,
                    }}
                  /> */}
                  <Text style={styles.star}>★</Text>
                  <View style={styles.cardTitle}>
                    <Text style={styles.cardText}>{item.name}</Text>
                    {item.button ? (
                      <Text style={[styles.cardButton, {color: item.color}]}>
                        {item.button}
                      </Text>
                    ) : null}
                  </View>
                  <View style={styles.addIcon}>
                    <Text style={styles.addIconText}>+</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      {/* swiper in react native  */}

      <Carousel
        loop
//         ref={(e)=>{
// // setPagination(e.getCurrentIndex())
//           // console.log(e.next()+1,"lllll")
//         }}
        style={styles.caraousel}
        defaultIndex={0}
        onScrollBegin={(item, index, data) => {
          //   alert('jjj');
          //   console.log('jjj', item, index, data);
        }}
        width={wp(100)}
        height={width / 2}
        autoPlay={true}
        autoPlayInterval={2000}
        // parallaxScrollingOffset={10}
        enabled={true}
        data={CaraouselData}
        // scrollAnimationDuration={10}
        pagingEnabled={true}
        snapEnabled={true}
        overscrollEnabled
        // mode={'normal-vertical'}
        // onProgressChange={data => {
        //   console.log('jjj', data);
        //   //   alert('jjj');
        // }}
        onSnapToItem={index => {
          setPagination(index);
        }}
        renderItem={({item, index}) => {
          //   var pppp = item.button;
          //   setButtonData(item.button);
          //   console.log(item.button == index + 1, 'kkkk', index + 1);
          return (
            <View
              style={{
                // backgroundColor: 'red',
                //   flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View>
                <Text style={styles.caraouselTitle}>{item.title}</Text>
              </View>
              <View style={styles.desc}>
                <Text>{item.desc}</Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: RF(-20),
        }}>
        {CaraouselData.length > 1 &&
          CaraouselData.map((item, i) => (
            <>
              <TouchableOpacity
                key={i}
                style={[
                  {
                    backgroundColor: 'red',
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    margin: 2,
                  },
                  i === pagination
                    ? {
                        backgroundColor: 'black',
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        margin: 2,
                      }
                    : {backgroundColor: 'grey'},
                ]}
                //   onPress={() => item.current?.goToSlide(i, true)}
              />
            </>
          ))}
      </View>
      <View style={{backgroundColor: 'lightgrey', flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderRadius: 50,
            top: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 50,
            elevation: 2,
          }}>
          {CaraouselData.map((item, index) => {
            return (
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  textTransform: 'capitalize',
                  color: item.color,
                }}>
                {index == pagination ? item.button : ''}
                {/* {pagination == 0 ? 'abc ' : pagination == 1 ? 'xyz' : 'kkkkk'} */}
              </Text>
            );
          })}
        </View>
      </View>
      {/* edit button in pencil */}
      <View
        style={{
          position: 'absolute',
          left: 230,
          top: 100,
          width: 50,
          height: 50,
          borderRadius: 200,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          elevation: 5,
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/61/61456.png',
          }}
          resizeMode={'contain'}
          style={{width: 25, height: 25}}
        />
      </View>
    </View>
  );
};

export default Profile;
