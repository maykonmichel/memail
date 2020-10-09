import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import useMessage from './useMessage';

const Message: FC = () => {
  const {detail} = useMessage();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{detail}</Text>
    </View>
  );
};

export default memo(Message);
