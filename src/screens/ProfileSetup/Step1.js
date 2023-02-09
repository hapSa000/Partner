import React from 'react';
import {CurveButton} from '../../component/CurveButton';
import InputField from '../../component/InputField';
import {MainContainer} from '../../component/MainContainer';
import {textConstants} from '../../constants/textConstants/textConstants';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {View, Text} from 'react-native';
import colors from '../../constants/colorConstsnts/colors';

export default function Step1(props) {
  const buttonTextStyle = {
    marginTop: 50,

    color: '#393939',
  };

  return (
    // <MainContainer>

    <View style={{flexGrow: 1}}>
      <ProgressSteps
        activeStepIconBorderColor={colors.Pink}
        activeLabelColor={colors.Pink}
        completedStepIconColor={colors.Pink}
        labelColor={colors.grey}
        completedLabelColor={colors.Pink}
        completedProgressBarColor={colors.Pink}
        progressBarColor={colors.Pink}>
        <ProgressStep
          label="First Step"
          progressBarColor={colors.Pink}
          activeStepIconBorderColor={colors.Pink}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 1!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Second Step"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 2!</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Second Three"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 2!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
    // </MainContainer>
  );
}
