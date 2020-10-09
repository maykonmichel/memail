import React, {FC, memo} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import api from './src/data/api';
import Navigator from './src/navigators';
import colors from './src/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.dark,
  },
});

const App: FC = () => {
  return (
    <ApolloProvider client={api}>
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default memo(App);
