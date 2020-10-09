import {useQuery} from '@apollo/client';

import MESSAGES, {
  MessagesData,
  MessagesVariables,
} from '../../data/gql/queries/MESSAGES';
import {useCallback} from 'react';

export default () => {
  const {data: {messages = []} = {}, loading} = useQuery<
    MessagesData,
    MessagesVariables
  >(MESSAGES);

  const keyExtractor = useCallback(({id}) => id.toString(), []);

  return {
    keyExtractor,
    loading,
    messages,
    refetchNew: () => {},
  };
};
