/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
import scaler from 'src/Utils/Shared/scaler';

type propType = {
  loading?: any;
  onPress?: any;
  width?: any;
  height?: number;
  fontSize?: number;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  color?: any;
  leftmargin?: any;
  labelStyle?: any;
  children?: any;
  mode?: 'text' | 'outlined' | 'contained';
};

function AppButton({
  children,
  onPress,
  width,
  height,
  fontSize,
  style,
  contentStyle,
  color,
  labelStyle,
  mode,
  loading
}: propType) {
  console.log({children});
  return (
    <Button
      loading={loading}
      mode={mode || 'contained'}
      uppercase={false}
      color={color}
      onPress={onPress}
      contentStyle={{
        height: height || scaler(30),
        overflow: 'scroll',
        ...contentStyle,
      }}
      style={{minWidth: width, ...style}}
      labelStyle={{
        fontSize: fontSize || scaler(10),
        ...labelStyle,
      }}>
      {children}
    </Button>
  );
}

export default AppButton;
