import {useQuery} from '@apollo/client';

import MESSAGES, {MessagesData} from '../../data/gql/queries/MESSAGES';

export default () => {
  const meta = useQuery<MessagesData>(MESSAGES);
  console.log(meta);
};
