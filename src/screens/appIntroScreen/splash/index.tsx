import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import images from '../../../constants/imageConstants/images';
const Splash = ({ navigation }: any) => {
    
    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [
                    { name: 'Login' }
                ]
            });
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                <Image
                    source={images.tinder}
                    resizeMode="contain"
                    style={styles.img}
                />
            </View>
        </View>
    );
};
export default Splash
