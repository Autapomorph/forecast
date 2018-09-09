import React from 'react';

import Message from '../Message';

const Error = ({ children, ...props }) => (
  <Message error {...props}>
    {children}
  </Message>
);

export default Error;
