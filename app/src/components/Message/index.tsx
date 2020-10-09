import React, {FC, memo, useCallback, useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MessageT from '../../data/models/Message';
import styles from './styles';

const Message: FC<MessageT> = (message) => {
  const {read, subject, timestamp} = message;

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
      <Icon
        name={read ? 'email-open' : 'email'}
        size={28}
        style={[styles.icon, read && styles.read]}
      />
      <Text style={[styles.subject, read && styles.read]}>{subject}</Text>
      <Text style={[styles.date, read && styles.read]}>{date}</Text>
    </TouchableOpacity>
  );
};

export default memo(Message);
