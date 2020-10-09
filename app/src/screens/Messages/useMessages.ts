import {useCallback} from 'react';
import {useQuery} from '@apollo/client';

import MESSAGES, {
  MessagesData,
  MessagesVariables,
} from '../../data/gql/queries/MESSAGES';

export default () => {
  const {data: {messages = []} = {}, loading, fetchMore} = useQuery<
    MessagesData,
    MessagesVariables
  >(MESSAGES, {notifyOnNetworkStatusChange: true});

  const keyExtractor = useCallback(({id}) => id.toString(), []);

  const fetchMoreOlder = useCallback(async () => {
    const older = messages[messages.length - 1];
    await fetchMore({
      variables: {before: older.timestamp},
    });
  }, [messages, fetchMore]);

  const fetchMoreRecent = useCallback(async () => {
    const [moreRecent] = messages;
    await fetchMore({
      variables: {after: moreRecent.timestamp},
    });
  }, [messages, fetchMore]);

  return {
    fetchMoreOlder,
    fetchMoreRecent,
    keyExtractor,
    loading,
    messages,
  };
};
