import React, {FC, memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Messages from '../screens/Messages';

const {Navigator, Screen} = createStackNavigator();

const Stack: FC = () => {
  return (
    <Navigator>
      <Screen
        name={'messages'}
        component={Messages}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default memo(Stack);
