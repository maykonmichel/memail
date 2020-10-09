import React, {FC, memo, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';

import Message from '../../components/Message';
import MessageT from '../../data/models/Message';

import useMessages from './useMessages';
import styles from './styles';

const Messages: FC = () => {
  const {
    fetchMoreOlder,
    fetchMoreRecent,
    keyExtractor,
    loading,
    messages,
  } = useMessages();

  const refreshControl = useMemo(
    () => <RefreshControl refreshing={loading} onRefresh={fetchMoreRecent} />,
    [fetchMoreRecent, loading],
  );

  const renderItem = useCallback<ListRenderItem<MessageT>>(
    ({item}) => <Message {...item} />,
    [],
  );

  return (
    <FlatList
      data={messages}
      extraData={messages}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.container}
      refreshControl={refreshControl}
      onEndReached={fetchMoreOlder}
      onEndReachedThreshold={0.1}
    />
  );
};

export default memo(Messages);
