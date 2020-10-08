import React, {FC, memo, useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import Message from '../../components/Message';
import MessageT from '../../data/models/Message';

import useMessages from './useMessages';
import styles from './styles';

const Messages: FC = () => {
  const {keyExtractor, messages} = useMessages();

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
    />
  );
};

export default memo(Messages);
