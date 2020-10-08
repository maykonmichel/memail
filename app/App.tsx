import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import api from './src/data/api';
import Navigator from './src/navigators';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App: FC = () => {
  return (
    <ApolloProvider client={api}>
      <View style={styles.container}>
        <Navigator />
      </View>
    </ApolloProvider>
  );
};

export default memo(App);
