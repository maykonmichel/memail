import React, {FC, memo} from 'react';

import useMessages from './useMessages';

const Messages: FC = () => {
  useMessages();

  return <></>;
};

export default memo(Messages);
