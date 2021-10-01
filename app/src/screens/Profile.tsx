import {observer} from 'mobx-react';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile Count</Text>
    </SafeAreaView>
  );
};

export default observer(Profile);
