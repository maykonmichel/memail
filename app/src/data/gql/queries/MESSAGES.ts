import gql from 'graphql-tag';

import Message from '../../models/Message';

export type MessagesData = {
  messages: Message[];
};

export type MessagesVariables = {
  after?: number;
};

export default gql`
  query($after: Int) {
    messages(after: $after)
      @rest(type: "Message", path: "/messages?{args}", method: "GET") {
      id
      timestamp
      subject
      detail
      read
    }
  }
`;
