import React from 'react';
import {CurveButton} from '../../component/CurveButton';
import InputField from '../../component/InputField';
import {MainContainer} from '../../component/MainContainer';
import {textConstants} from '../../constants/textConstants/textConstants';

export default function Step1() {
  return (
    <MainContainer>
      <InputField type={'outlined'} placeholder={'Email'} label={'Email'} />
      <CurveButton title={'Submit'} />
    </MainContainer>
  );
}
