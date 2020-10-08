import {useQuery} from '@apollo/client';

import MESSAGES, {MessagesData} from '../../data/gql/queries/MESSAGES';
import {useCallback} from 'react';

export default () => {
  const {data: {messages = []} = {}} = useQuery<MessagesData>(MESSAGES);

  const keyExtractor = useCallback(({id}) => id.toString(), []);

  return {
    keyExtractor,
    messages,
  };
};
