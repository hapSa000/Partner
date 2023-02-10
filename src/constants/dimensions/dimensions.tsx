import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get('window').width;
export const screenHeigth = Dimensions.get('window').height;


const designResolution = {
width: 1125,
height: 2436
}

export function perfectWidth(pixel: number) {
return screenWidth / (designResolution.width / pixel)
}

export function perfectHeight(pixel: number) {
return screenHeigth / (designResolution.height / pixel)
}
// +++++++++++++++++++example++++++++++++++++++++++++
// export const perfectSize = create(designResolution)