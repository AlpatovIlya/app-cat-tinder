import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {EventIconType} from '../types/components';

const EventIcon: FC<EventIconType> = ({wrapperStyle, icon, ...props}) => {
  return (
    <TouchableOpacity style={[styles.wrapper, wrapperStyle]} {...props}>
      <Image style={styles.icon} source={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f0f0f0',
    borderColor: '#bbbbbb',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default EventIcon;
