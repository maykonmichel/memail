import React, {FC, memo, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';

import Message from '../../components/Message';
import MessageT from '../../data/models/Message';

import useMessages from './useMessages';
import styles from './styles';

const Messages: FC = () => {
  const {keyExtractor, loading, messages, fetchMoreRecent} = useMessages();

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
    />
  );
};

export default memo(Messages);
