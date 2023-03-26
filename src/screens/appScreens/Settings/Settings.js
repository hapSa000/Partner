import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState} from 'react';
import {height} from '../../Constant/responsive';
const DummyData = [
  {
    id: 1,
    title: 'Priority Likes , see who Likes You, and more',
    image:
      'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg',
  },
  {
    id: 2,
    image:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/31193518001/5f0f9036-eff6-4dbb-b81b-9cae897128f9/60946457-5b13-43a6-8801-16af87110f2f/1280x720/match/image.jpg',

    title: 'See who likes you & more!',
  },
  {
    id: 3,
    title: 'Unlimited Likes & more!',
    image:
      'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg',
  },
];
const smallArr = [
  {
    id: 3,
    title: 'Get Super Likes',
    image:
      'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg',
  },
  {
    id: 3,
    title: 'Get Boosts',
    image:
      'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg',
  },
];
const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [distnaceValue, setDistnaceValue] = useState([0]);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'red'}}
      showsVerticalScrollIndicator={false}
      scrollEnabled
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* header in setting */}
        <View
          style={{
            padding: 15,
            backgroundColor: 'pink',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/109/109618.png',
            }}
            style={{width: 20, height: 20}}
          />
          <Text style={{fontWeight: 'bold', marginLeft: 50, fontSize: 17}}>
            {'Settings'}
          </Text>
        </View>
        {/* card create here  */}
        <View style={{backgroundColor: 'green', flex: 0}}>
          <FlatList
            data={DummyData}
            style={{paddingTop: 20, backgroundColor: 'white'}}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    elevation: 2,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15,
                    marginHorizontal: 15,
                    marginVertical: 5,
                    borderRadius: 8,
                  }}>
                  <Image
                    source={{uri: item.image}}
                    resizeMode={'contain'}
                    style={{width: '50%', height: 40}}
                  />
                  <Text style={{color: 'black', fontWeight: '600'}}>
                    {item.title}
                  </Text>
                  {/* icon set card */}
                </View>
              );
            }}
          />
        </View>
        <View style={{backgroundColor: 'green', flex: 0}}>
          <FlatList
            data={smallArr}
            numColumns={'2'}
            style={{backgroundColor: 'white'}}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    elevation: 2,
                    backgroundColor: 'white',
                    width: '44.1%',
                    padding: 15,
                    marginHorizontal: 10,
                    marginVertical: 5,
                    borderRadius: 8,
                    // flexWrap: 'wrap',
                    paddingHorizontal: 50,
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-between',

                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: item.image}}
                      resizeMode={'contain'}
                      style={{
                        width: 50,
                        height: 50,
                        margin: 10,
                        elevation: 2,
                        borderRadius: 25,
                      }}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '600',
                        width: 150,
                        textAlign: 'center',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  {/* icon set card */}
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            elevation: 2,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            marginHorizontal: 15,
            marginVertical: 5,
            borderRadius: 8,
            // bottom: 130,
          }}>
          <Image
            source={{
              uri: 'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg',
            }}
            resizeMode={'contain'}
            style={{
              width: 50,
              height: 50,
              margin: 10,
              elevation: 20,
              borderRadius: 25,
              borderColor: 'grey',
              borderWidth: 0.5,
            }}
          />

          <Text style={{color: 'black', fontWeight: '600'}}>
            {'Go Incognito'}
          </Text>
        </View>
        <View
          style={{
            // elevation: 2,
            backgroundColor: 'white',
            // justifyContent: 'center',
            // alignItems: 'center',
            padding: 10,
            marginHorizontal: 0,
            marginVertical: 5,
            // borderRadius: 8,
            // bottom: 130,
          }}>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
            Account settings
          </Text>
        </View>
        <View
          style={{
            // padding: 10,
            marginHorizontal: 15,
            // marginVertical: 5,
          }}>
          <View
            style={{
              elevation: 2,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              //   marginHorizontal: 15,
              marginVertical: 5,
              borderRadius: 8,
              flexDirection: 'row',
            }}>
            <Text style={{color: 'black', fontSize: 15}}>Phone Number</Text>
            <Text style={{color: 'black', fontSize: 15}}>
              {'917509965159  >'}
            </Text>
          </View>
          <Text style={{color: 'black', fontSize: 10}}>
            Verify a phone number to help secure your account
          </Text>
        </View>
        <View
          style={{
            // elevation: 2,
            backgroundColor: 'white',
            // justifyContent: 'center',
            // alignItems: 'center',
            padding: 10,
            marginHorizontal: 0,
            marginVertical: 5,
            // borderRadius: 8,
            // bottom: 130,
          }}>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
            Discovery settings
          </Text>
        </View>
        <View
          style={{
            // padding: 10,
            marginHorizontal: 15,
            // marginVertical: 5,
          }}>
          <View
            style={{
              elevation: 2,
              backgroundColor: 'white',

              padding: 10,
              //   marginHorizontal: 15,
              marginVertical: 5,
              borderRadius: 8,
            }}>
            <Text style={{color: 'black', fontSize: 15}}>Phone Number</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 15,
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2838/2838912.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'blue',
                }}
              />
              <Text
                style={{
                  fontWeight: '500',
                  textTransform: 'capitalize',
                  color: 'black',
                }}>
                my current location
              </Text>
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/free/png-256/right-true-verify-perfect-trust-64-32776.png',
                }}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: 'blue',
                }}
              />
            </View>
            <Text
              style={{
                padding: 25,
                fontWeight: '700',
                color: 'blue',
                textAlign: 'center',
              }}>
              Add a new location
            </Text>
          </View>
          <Text style={{color: 'black', fontSize: 10}}>
            Change your location to see Tinder members in other cities.
          </Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <View
            style={{
              elevation: 2,
              backgroundColor: 'white',

              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              borderRadius: 8,
            }}>
            <Text style={{color: 'black', fontSize: 15}}>Global</Text>
            <Switch
              trackColor={{false: '#767577', true: 'pink'}}
              thumbColor={isEnabled ? 'red' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={{color: 'black', fontSize: 10}}>
            Going global will allow you to see people nearby and from around the
            world .
          </Text>
        </View>
        {/* prefered language */}
        <View style={{marginHorizontal: 15}}>
          <View
            style={{
              elevation: 2,
              backgroundColor: 'white',

              marginVertical: 5,
              borderRadius: 8,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: '900',
                padding: 15,
              }}>
              Preferred languages
            </Text>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                  padding: 15,
                }}>
                <Text>English</Text>
                <Text>{'>'}</Text>
              </View>
            </View>
            <Text
              style={{
                padding: 15,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'blue',
              }}>
              {'Add language ...'}
            </Text>
          </View>
        </View>
        {/* distance maximun */}
        <View
          style={{
            elevation: 2,
            backgroundColor: 'white',
            marginHorizontal: 15,
            padding: 10,

            marginVertical: 5,
            borderRadius: 8,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   backgroundColor: 'red',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Maximum distance
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {distnaceValue}Km.
            </Text>
          </View>
          <MultiSlider
            values={distnaceValue}
            min={0}
            markerStyle={{backgroundColor: 'red'}}
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            trackStyle={{backgroundColor: 'grey'}}
            onValuesChange={data => {
              setDistnaceValue(data);
              console.log('lllll---', data);
            }}
            max={100}
            sliderLength={280}
            // enableLabel={true}
            customMarker={<Text>hello</Text>}
            // imageBackgroundSource={{
            //   uri: " 'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg'",
            // }}
            isMarkersSeparated={true}
            customMarkerLeft={e => {
              return (
                <View
                  style={{
                    backgroundColor: 'red',
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                  }}>
                  <Text currentValue={e.currentValue} />
                </View>
              );
            }}
            // customMarkerRight={e => {
            //   return (
            //     <View
            //       style={{
            //         backgroundColor: 'red',
            //         width: 20,
            //         height: 20,
            //         borderRadius: 10,
            //       }}>
            //       <Text currentValue={e.currentValue} />
            //     </View>
            //   );
            // }}
            // optionsArray={[1, 2]}
            selectedStyle={{backgroundColor: 'red', height: 'auto'}}
            onValuesChangeStart={e => {
              //   alert(e);
              console.log('diiiiii--', JSON.stringify(e));
            }}
            onValuesChangeFinish={e => {
              //   alert(e);
              console.log('diiiiii--', JSON.stringify(e));
            }}
          />
          <View
            style={{
              backgroundColor: 'white',

              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              borderRadius: 8,
            }}>
            <Text style={{color: 'black', fontSize: 15}}>
              Only show people in this range
            </Text>
            <Switch
              trackColor={{false: '#767577', true: 'pink'}}
              thumbColor={isEnabled ? 'red' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        {/* show me  */}
        <View
          style={{
            backgroundColor: 'white',
            elevation: 2,
            padding: 10,
            marginHorizontal: 15,

            marginVertical: 5,
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Show me
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              padding: 15,
            }}>
            <Text>Men</Text>
            <Text>{'>'}</Text>
          </View>
        </View>
        <View
          style={{
            elevation: 2,
            backgroundColor: 'white',
            marginHorizontal: 15,
            padding: 10,

            marginVertical: 5,
            borderRadius: 8,
          }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   backgroundColor: 'red',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Age range
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {distnaceValue} - {distnaceValue}
            </Text>
          </View>
          <MultiSlider
            values={distnaceValue}
            min={0}
            markerStyle={{backgroundColor: 'red'}}
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            trackStyle={{backgroundColor: 'grey'}}
            onValuesChange={data => {
              setDistnaceValue(data);
              console.log('lllll---', data);
            }}
            max={100}
            sliderLength={280}
            // enableLabel={true}
            customMarker={<Text>hello</Text>}
            // imageBackgroundSource={{
            //   uri: " 'https://www.wbcsd.org/var/site/storage/images/programs/redefining-value/external-disclosure/reporting-matters/resources/reporting-matters-2018/76319-5-eng-GB/Reporting-matters-2018_i1140.jpg'",
            // }}
            isMarkersSeparated={true}
            customMarkerLeft={e => {
              return (
                <View
                  style={{
                    backgroundColor: 'red',
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                  }}>
                  <Text currentValue={e.currentValue} />
                </View>
              );
            }}
            // customMarkerRight={e => {
            //   return (
            //     <View
            //       style={{
            //         backgroundColor: 'red',
            //         width: 20,
            //         height: 20,
            //         borderRadius: 10,
            //       }}>
            //       <Text currentValue={e.currentValue} />
            //     </View>
            //   );
            // }}
            // optionsArray={[1, 2]}
            selectedStyle={{backgroundColor: 'red', height: 'auto'}}
            onValuesChangeStart={e => {
              //   alert(e);
              console.log('diiiiii--', JSON.stringify(e));
            }}
            onValuesChangeFinish={e => {
              //   alert(e);
              console.log('diiiiii--', JSON.stringify(e));
            }}
          />
          <View
            style={{
              backgroundColor: 'white',

              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
              borderRadius: 8,
            }}>
            <Text style={{color: 'black', fontSize: 15}}>
              Only show people in this range
            </Text>
            <Switch
              trackColor={{false: '#767577', true: 'pink'}}
              thumbColor={isEnabled ? 'red' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={{color: 'black', fontSize: 10}}>
            Tinder uses these preferences to suggest matches. some match
            suggestions may not fail within your desired parameters.
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 15,
            paddingVertical: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Control Who You See
          </Text>
          <View
            style={{
              backgroundColor: 'red',
              paddingHorizontal: 7,
              borderRadius: 10,
              alignItems: 'center',
              left: 10,
            }}>
            <Text style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>
              Tinder PLus ®
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
