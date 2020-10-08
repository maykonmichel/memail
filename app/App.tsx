import React, {FC, memo} from 'react';
import {ApolloProvider} from '@apollo/client';

import api from './src/data/api';
import Messages from './src/screens/Messages';

const App: FC = () => {
  return (
    <ApolloProvider client={api}>
      <Messages />
    </ApolloProvider>
  );
};

export default memo(App);
