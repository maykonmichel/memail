import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import MessageT from '../../data/models/Message';
import styles from './styles';

const Message: FC<MessageT> = ({subject}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{subject}</Text>
    </View>
  );
};

export default memo(Message);
