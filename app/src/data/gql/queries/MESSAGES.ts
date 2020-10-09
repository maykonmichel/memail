import gql from 'graphql-tag';

import Message from '../../models/Message';

export type MessagesData = {
  messages: Message[];
};

export type MessagesVariables = {
  before?: number;
  after?: number;
};

export default gql`
  query($before: Int, $after: Int) {
    messages(before: $before, after: $after)
      @rest(type: "Message", path: "/messages?{args}", method: "GET") {
      id
      timestamp
      subject
      detail
      read
    }
  }
`;
