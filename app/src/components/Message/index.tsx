import React, {FC, memo, useMemo} from 'react';
import {Text, View} from 'react-native';
import {format} from 'date-fns';

import MessageT from '../../data/models/Message';
import styles from './styles';

const Message: FC<MessageT> = ({subject, timestamp}) => {
  const date = useMemo(() => format(timestamp, 'dd/MM/yyyy HH:mm'), [
    timestamp,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default memo(Message);
