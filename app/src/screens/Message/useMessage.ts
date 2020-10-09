import {useRoute, useNavigation} from '@react-navigation/native';
import Message from '../../data/models/Message';
import {useEffect} from 'react';
import {useApolloClient} from '@apollo/client';

type RouteProp = {
  key: string;
  name: 'message';
  params: Message;
};

export default () => {
  const {setOptions} = useNavigation();
  const {params: message} = useRoute<RouteProp>();

  const {detail, subject} = message;

  const {cache} = useApolloClient();

  useEffect(() => {
    setOptions({headerTitle: subject});
  }, [setOptions, subject]);

  useEffect(() => {
    cache.modify({
      id: cache.identify(message),
      fields: {
        read: () => true,
      },
    });
  }, [cache, message]);

  return {
    detail,
  };
};
