import gql from 'graphql-tag';

import Message from '../../models/Message';

export type MessagesData = {
  messages: Message[];
};

export default gql`
  query {
    messages @rest(type: "Message", path: "/messages", method: "GET") {
      id
      timestamp
      subject
      detail
    }
  }
`;
