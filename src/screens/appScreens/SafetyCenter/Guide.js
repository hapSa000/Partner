import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RF,wp} from '../../../constants/responsive';

const Guide = () => {
  return (
    // <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}} scrollEnabled>
    <View style={{flex: 0, backgroundColor: 'white'}}>
      <View
        style={{
          paddingVertical: 30,
          paddingHorizontal: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: wp(70)}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>
            Hi Sanjeev
          </Text>
          <Text style={{color: 'black', fontSize: RF(15)}}>
            Here`s what you need to know about safety
          </Text>
        </View>
        <View
        //   style={{
        //     width: wp(70),
        //     backgroundColor: 'pink',
        //   }}
        >
          <Image
            source={{
              uri: 'https://c1.wallpaperflare.com/preview/697/102/568/background-green-gardening-spring-thumbnail.jpg',
            }}
            style={{width: 40, height: 40, borderRadius: 20}}
          />
        </View>
      </View>
      {/* harassments */}
      <View
        style={{
          paddingBottom: 20,
          paddingHorizontal: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          Harassments
        </Text>
      </View>
      {/* how to deal  */}
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Image
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/697/102/568/background-green-gardening-spring-thumbnail.jpg',
          }}
          style={{width: 40, height: 40, borderRadius: 20}}
        />
        <View style={{width: wp(60), backgroundColor: 'white'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            How To Deal
          </Text>
          <Text style={{color: 'grey', fontSize: 15}}>
            If you see something, say something
          </Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      {/* some importatn  */}
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Text
          style={{
            textTransform: 'capitalize',
            fontWeight: '700',
            color: 'black',
          }}>
          7 Times it`s perfectly acceptable to ghost someone
        </Text>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      {/* safety */}
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 0,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            textTransform: 'capitalize',
          }}>
          Safety
        </Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Image
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/697/102/568/background-green-gardening-spring-thumbnail.jpg',
          }}
          style={{width: 40, height: 40, borderRadius: 20}}
        />
        <View style={{width: wp(60), backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
              textTransform: 'capitalize',
            }}>
            the basics
          </Text>
          <Text style={{color: 'grey', fontSize: 15}}>
            What you need to know to be safer on Tinder and IRL
          </Text>
          <Text style={{color: 'grey', fontSize: 15}}>- all in one place.</Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      {/* quiz */}
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{color: 'black'}}>Quiz</Text>
        </View>
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            online dating safety quiz
          </Text>
          {/* <Text style={{color: 'grey', fontSize: 15}}>
            What you need to know to be safer on Tinder and IRL
          </Text> */}
          {/* <Text style={{color: 'grey', fontSize: 15}}>- all in one place.</Text> */}
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      {/* quiz */}
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{color: 'black'}}>Quiz</Text>
        </View>
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            tinder community quidelines quiz
          </Text>
          {/* <Text style={{color: 'grey', fontSize: 15}}>
            What you need to know to be safer on Tinder and IRL
          </Text> */}
          {/* <Text style={{color: 'grey', fontSize: 15}}>- all in one place.</Text> */}
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      {/* in real life */}
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 0,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            textTransform: 'capitalize',
          }}>
          in real life
        </Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Image
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/697/102/568/background-green-gardening-spring-thumbnail.jpg',
          }}
          style={{width: 60, height: 60, borderRadius: 10}}
        />
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            your IRL guide
          </Text>
          <Text style={{color: 'grey', fontSize: 15}}>
            Tips to help you be safer IRL(even though we wish you didn`t have
            to).
          </Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{color: 'black'}}>Quiz</Text>
        </View>
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 13,
              //   textTransform: 'capitalize',
            }}>
            IRL Safety 101 Quiz
          </Text>
          {/* <Text style={{color: 'grey', fontSize: 15}}>
            What you need to know to be safer on Tinder and IRL
          </Text> */}
          {/* <Text style={{color: 'grey', fontSize: 15}}>- all in one place.</Text> */}
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      {/* hello reporting */}
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 0,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            textTransform: 'capitalize',
          }}>
          Reporting
        </Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Image
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/697/102/568/background-green-gardening-spring-thumbnail.jpg',
          }}
          style={{width: 60, height: 60, borderRadius: 10}}
        />
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            What to Report
          </Text>
          <Text style={{color: 'grey', fontSize: 15}}>
            When you should report someone and when you shouldn't.
          </Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        {/* <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{color: 'black'}}>Quiz</Text>
        </View> */}
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            how to report someone
          </Text>
          {/* <Text style={{color: 'grey', fontSize: 15}}>
            What you need to know to be safer on Tinder and IRL
          </Text> */}
          {/* <Text style={{color: 'grey', fontSize: 15}}>- all in one place.</Text> */}
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        {/* <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{color: 'black'}}>Quiz</Text>
        </View> */}
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            what happens after i report
          </Text>
          {/* <Text style={{color: 'grey', fontSize: 15}}>
            What you need to know to be safer on Tinder and IRL
          </Text> */}
          {/* <Text style={{color: 'grey', fontSize: 15}}>- all in one place.</Text> */}
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      {/* consent */}
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 0,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            textTransform: 'capitalize',
          }}>
          consent
        </Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Image
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/697/102/568/background-green-gardening-spring-thumbnail.jpg',
          }}
          style={{width: 60, height: 60, borderRadius: 10}}
        />
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              fontSize: 15,
            }}>
            consent 101
          </Text>
          <Text style={{color: 'grey', fontSize: 15}}>
            it's a necessary part of any connection and we're here to give you a
            crash ...
          </Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 0,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          //   elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            textTransform: 'capitalize',
          }}>
          Travel
        </Text>
      </View>
      <View
        style={{
          //   paddingBottom: 20,
          marginHorizontal: 15,
          marginVertical: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          elevation: 2,
          borderRadius: 8,
          padding: 15,
        }}>
        <Image
          source={{
            uri: 'https://c1.wallpaperflare.com/preview/697/102/568/background-green-gardening-spring-thumbnail.jpg',
          }}
          style={{width: 60, height: 60, borderRadius: 10}}
        />
        <View style={{width: wp(50), backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
              textTransform: 'capitalize',
            }}>
            the do's and don't
          </Text>
          <Text style={{color: 'grey', fontSize: 15}}>
            In order to have the trip of a lifetime, there are a few things you
            need to know.
          </Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>{'>'}</Text>
      </View>
    </View>
    // </ScrollView>
  );
};

export default Guide;

const styles = StyleSheet.create({});
