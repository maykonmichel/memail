import React, {FC, memo} from 'react';
import {Text} from 'react-native';

import MessageT from '../../data/models/Message';

const Message: FC<MessageT> = ({subject}) => {
  return <Text>{subject}</Text>;
};

export default memo(Message);
