import {ImageProps, TouchableOpacityProps, ViewStyle} from 'react-native';

type IconType = {
  icon: ImageProps;
  text?: string;
  wrapperStyle?: ViewStyle;
};

export type EventIconType = IconType & TouchableOpacityProps;
