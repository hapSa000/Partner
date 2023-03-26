import {Dimensions, Platform, PixelRatio} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('screen');

// based on iphone 6 scale
const ScaleWidth = SCREEN_WIDTH / 375;
export const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;
export function RF(size) {
  if (Platform.OS === 'ios') {
    return Math.round(size * ScaleWidth);
  } else {
    return Math.round(size * ScaleWidth);
  }
}

//Extra Responsive functions

export function hp(percentage) {
  return PixelRatio.roundToNearestPixel(
    (Dimensions.get('screen').height * percentage) / 100,
  );
}

export function wp(percentage) {
  return PixelRatio.roundToNearestPixel(
    (Dimensions.get('screen').width * percentage) / 100,
  );
}
