import {useQuery} from '@apollo/client';

import MESSAGES, {
  MessagesData,
  MessagesVariables,
} from '../../data/gql/queries/MESSAGES';
import {useCallback} from 'react';

export default () => {
  const {data: {messages = []} = {}, loading, fetchMore} = useQuery<
    MessagesData,
    MessagesVariables
  >(MESSAGES);

  const keyExtractor = useCallback(({id}) => id.toString(), []);

  const fetchMoreRecent = useCallback(async () => {
    const [moreRecent] = messages;
    await fetchMore({
      variables: {after: moreRecent.timestamp},
      updateQuery: (previousQueryResult, {fetchMoreResult}) => {
        const newMessages = fetchMoreResult?.messages || [];
        return {
          messages: [...newMessages, ...messages],
        };
      },
    });
  }, [messages, fetchMore]);

  return {
    keyExtractor,
    loading,
    messages,
    fetchMoreRecent,
  };
};
