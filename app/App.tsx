import React, {FC, memo} from 'react';
import {ApolloProvider} from '@apollo/client';

import api from './src/data/api';

const App: FC = () => {
  return (
    <ApolloProvider client={api}>
      <></>
    </ApolloProvider>
  );
};

export default memo(App);
