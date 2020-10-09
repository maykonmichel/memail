import {useRoute, useNavigation} from '@react-navigation/native';
import Message from '../../data/models/Message';
import {useEffect} from 'react';

type RouteProp = {
  key: string;
  name: 'message';
  params: Message;
};

export default () => {
  const {setOptions} = useNavigation();
  const {
    params: {detail, subject},
  } = useRoute<RouteProp>();

  useEffect(() => {
    setOptions({headerTitle: subject});
  }, [setOptions, subject]);

  return {
    detail,
  };
};
