import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const DummyData = [
  {
    id: 1,
    title: 'how to report',
    desc: 'Reporting is a safe way to let us know that someone is acting inappropriately.',
    image:
      'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg',
  },
  {
    id: 2,
    title: 'privacy settings',
    desc: 'customize your experience with these privacy features and settings.',
    image:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/31193518001/5f0f9036-eff6-4dbb-b81b-9cae897128f9/60946457-5b13-43a6-8801-16af87110f2f/1280x720/match/image.jpg',
  },
  {
    id: 3,
    title: 'how to unmatch',
    desc: 'Reporting is a safe way to let us know that someone is acting inappropriately.',
    image:
      'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg',
  },
  {
    id: 4,
    title: 'how to get photo verified',
    desc: 'the best way to know someone isn`t too good to be true',
    image:
      'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg',
  },
];
const Tools = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={DummyData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginVertical: 20,
                marginHorizontal: 20,
                elevation: 1,
                borderRadius: 8,
                backgroundColor: 'white',
              }}>
              <Image
                resizeMode="cover"
                source={{uri: item.image}}
                style={{
                  width: '100%',
                  height: 150,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <View style={{padding: 20}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: 'black',
                    textTransform: 'capitalize',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    // color: 'black',
                    textTransform: 'capitalize',
                  }}
                  numberOfLines={3}>
                  {item.desc}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Tools;

const styles = StyleSheet.create({});
