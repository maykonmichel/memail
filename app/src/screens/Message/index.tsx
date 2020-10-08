import React, {FC, memo} from 'react';
import {View} from 'react-native';
import styles from './styles';

const Message: FC = () => {
  return <View style={styles.container} />;
};

export default memo(Message);
