import React, {FC, memo, useCallback, useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';

import MessageT from '../../data/models/Message';
import styles from './styles';

const Message: FC<MessageT> = (message) => {
  const {subject, timestamp} = message;

  const {navigate} = useNavigation();

  const date = useMemo(() => format(timestamp, 'dd/MM/yyyy HH:mm'), [
    timestamp,
  ]);

  const onPress = useCallback(() => navigate('message', message), [
    message,
    navigate,
  ]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

export default memo(Message);
