import * as React from 'react';
import { View, TextInput } from 'react-native';
// import colors from '../../constants/colorConstants/colors';
import { ErrorText } from '../CommonText';
import styles from './styles';

export default TextInputView = (props) => {
  let {
    refField,
    multiline,
    keyboardType,
    maxLength,
    disabled,
    returnKeyType,
    onSubmitEditing,
    onChangeText,
    pointerEvents,
    value,
    editable,
    error,
    blur,
    type,
    focus,
    secureTextEntry,
    placeholder,
  } = props;

  return (
    <>
      <TextInput
        theme={{
          colors: {
            placeholder: 'white',
            text: 'white',
            underlineColorAndroid: 'transparent',
            // primary: colors.Pink,
            underlineColor: 'transparent',
          },
        }}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        style={[props.style]}
        placeholder={placeholder}
        ref={refField}
        type={'flat'}
        // placeholderTextColor={colors.Black}
        onBlur={blur}
        onFocus={focus}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        keyboardType={keyboardType}
        maxLength={maxLength}
        disabled={disabled}
        value={value}
        error={error}
        returnKeyType={returnKeyType}
        blurOnSubmit={false}
        onChangeText={onChangeText}
        pointerEvents={pointerEvents}
        editable={editable}
        onSubmitEditing={onSubmitEditing}
      />

      {error ? (
        <ErrorText title={props.error} style={styles.errorText} />
      ) : null}
    </>
  );
};
