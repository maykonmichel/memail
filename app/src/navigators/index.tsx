import 'react-native-gesture-handler';

import React, {FC, memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default memo(Navigator);
