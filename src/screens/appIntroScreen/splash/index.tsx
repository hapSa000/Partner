import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './style';
import images from '../../../constants/imageConstants/images';
const Splash = () => {
    return (
        <View style={styles.container}>
            <Image
                source={images.tinder}
                resizeMode="contain"
                style={styles.img}
            />
        </View>
    );
};
export default Splash
