import React, {FC, memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Messages from '../screens/Messages';
import Message from '../screens/Message';
import colors from '../theme/colors';

const {Navigator, Screen} = createStackNavigator();

const Stack: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.black.dark, elevation: 0},
        headerTintColor: colors.primary.main,
      }}>
      <Screen
        name={'messages'}
        component={Messages}
        options={{headerShown: false}}
      />
      <Screen
        name={'message'}
        component={Message}
        options={{headerTitle: ''}}
      />
    </Navigator>
  );
};

export default memo(Stack);
