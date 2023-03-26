import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '../../../component/HomeHeader/HomeHeader'
import colors from '../../../constants/colorConstsnts/colors'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import DefaultButton from '../../../component/DefaultButton'
import { FlatList } from 'react-native'
import images from '../../../constants/imageConstants/images'

const Profile = () => {
  return (
    <View style={{backgroundColor:colors.White,flex:1}}>
      <HomeHeader title={"Profile"} />
      <LinearGradient
          colors={[colors.Primary, colors.Secondary,]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{height: 145, width: 145,borderRadius:80,justifyContent:"center",alignItems:"center" ,alignSelf:"center",marginTop:20}}
          >
<View style={{justifyContent:"center",alignItems:"center" , borderColor: colors.TwinkleBlue, height: 135, width: 135, borderWidth: 1,backgroundColor:"white",borderRadius:70}}>
<Image
                    source={{
                      uri: "https://c1.wallpaperflare.com/preview/129/82/484/stylish-boy-fashion-man-s-fashion-blurry-background.jpg"
                    }}
                    style={{
                      borderColor: colors.TwinkleBlue,
                      height: 120,
                      width: 120,
                      borderWidth: 1,
                      borderRadius: 60,
                    }}
                    resizeMode={'cover'}
                  />
</View>
</LinearGradient>
<View style={{position:"absolute",top:130,left:230,backgroundColor:"white",padding:10,borderRadius:50,elevation:5,}}>
    <Image source={{uri:"https://w7.pngwing.com/pngs/740/67/png-transparent-computer-icons-icon-design-edit-angle-computer-data-thumbnail.png"}} style={{width:40,height:40,backgroundColor:"transparent"}} />
</View>
{/* button */}
<View style={{marginTop:-20}}>
    <DefaultButton title={"100% complete"}  LinearGradientView />
</View>
{/* text written */}
<View style={{marginTop:20,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
    <Text style={{fontSize:25,fontWeight:"bold",color:colors.Black}}>Happy,24</Text>
    <Image source={{uri:"https://w7.pngwing.com/pngs/740/67/png-transparent-computer-icons-icon-design-edit-angle-computer-data-thumbnail.png"}} style={{width:30,height:30,backgroundColor:"transparent",marginLeft:10}} />
</View>
{/* multiple view show */}
<View style={{height:"52%",backgroundColor:"red"}} > 
<FlatList
style={{backgroundColor:colors.grey,paddingVertical:10,height:100,}}
horizontal
data={[{"id":"1","name":"like","icon":"https://img.freepik.com/premium-photo/stars-rating-icon-set_38816-1233.jpg"},{"id":"2","name":"like","icon":"https://evcharge.online/assets/images/Icons/dark-grey/power-icon.png"},{"id":"3","name":"like","icon":"home"}]}
renderItem={({item})=>{
    return(
        <View style={{backgroundColor:"transparent",flexDirection:'row',padding:10,top:20 }}>
<View style={{backgroundColor:colors.White,paddingVertical:10 ,margin:0,borderRadius:10 ,height:150,width:110}}>

<Image source={{uri:item.icon}} style={{width:30,height:30,backgroundColor:"transparent",marginLeft:10,margin:20,alignSelf:"center"}} />
<Text style={{fontSize:20,fontWeight:"bold",color:colors.Black,padding:10}}>Happy,24</Text>
</View>
<View style={{position:'absolute' ,elevation:1,left:80,backgroundColor:"white",borderRadius:50,width:50,height:50,borderColor:colors.grey,borderWidth:1,top:-15}}>
{/* <Image source={{uri:"https://w7.pngwing.com/pngs/740/67/png-transparent-computer-icons-icon-design-edit-angle-computer-data-thumbnail.png"}} style={{width:25,height:25,backgroundColor:"transparent",marginLeft:0,marginTop:10,alignSelf:"center",justifyContent:'center',alignItems:"center"}} /> */}
<Text style={{fontSize:40,textAlign:"center",bottom:5}}>+</Text>
</View>

</View>
    )
}}
 />
 {/* helo partner  app */}
 <View style={{backgroundColor:"white",alignItems:"center",width:'50%',justifyContent:"center",alignSelf:"center",borderRadius:20,padding:10,elevation:5,flexDirection:"row"}}>
 <Image source={images.Logo} style={{width:25,height:25,backgroundColor:"transparent",marginLeft:0,marginTop:0,alignSelf:"center",justifyContent:'center',alignItems:"center"}} />
    <Text style={{color:colors.Primary,fontWeight:"bold"}}>Get Partner Plus </Text>
    <Text style={{right:20,color:colors.Primary,bottom:15,position:"absolute",fontWeight:"bold"}}>®</Text>
</View>
{/* hello all get patner buttton */}
<View style={{backgroundColor:"white",alignItems:"center",width:'50%',justifyContent:"center",alignSelf:"center",borderRadius:20,padding:10,elevation:5,flexDirection:"row"}}>
    <Text style={{color:colors.Primary,fontWeight:"bold"}}>Get Partner Plust </Text>
    <Text style={{right:20,color:colors.Primary,bottom:15,position:"absolute",fontWeight:"bold"}}>®</Text>
</View>
 </View>

    </View>
  )
}

export default Profile