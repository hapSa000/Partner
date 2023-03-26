import {FlatList, Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';

const DummyData = [
  {
    id: 1,
    title: 'One Future Collective',
    icon: 'call',
    desc: 'Femjustice support helpline',
    buttonTitle: 'visit website',
  },
  {
    id: 2,
    title: 'Umang LBT Support Group',
    icon: 'call',
    desc: 'umang support group hepline',
    buttonTitle: 'visit website',
  },

  {
    id: 4,
    title: 'Pink Legal',

    buttonTitle: 'visit website',
  },
  {
    id: 5,
    title: 'The Humsafar Trust',

    buttonTitle: 'visit website',
  },
  {
    id: 6,
    title: 'National Commision for Women',

    buttonTitle: 'visit website',
  },
];
const Resource = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <FlatList
        data={DummyData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                paddingVertical: 30,
                paddingHorizontal: 20,
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5,
              }}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {item.title}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {item.icon ? (
                  <Image
                    source={{
                      uri: 'https://www.iconpacks.net/icons/1/free-phone-icon-504-thumb.png',
                    }}
                    style={{height: 20, width: 20, margin: 10}}
                  />
                ) : null}
                <Text>{item.desc}</Text>
              </View>
              <TouchableOpacity
                style={{
                  borderColor: 'grey',
                  borderWidth: 2,
                  padding: 7,
                  borderRadius: 20,
                  width: 100,

                  marginVertical: 10,
                }}>
                <Text style={{fontWeight: '700'}}>{item.buttonTitle}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Resource;

const styles = StyleSheet.create({});
