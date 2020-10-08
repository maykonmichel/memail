import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import api from './src/data/api';
import Messages from './src/screens/Messages';
import colors from './src/theme/colors';

const App: FC = () => {
  return (
    <ApolloProvider client={api}>
      <View style={{backgroundColor: colors.black.dark}}>
        <Messages />
      </View>
    </ApolloProvider>
  );
};

export default memo(App);
