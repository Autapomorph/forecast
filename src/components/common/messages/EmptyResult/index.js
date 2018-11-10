import React from 'react';

import Message from '../Message';

const EmptyResult = ({ children, ...props }) => <Message {...props}>{children}</Message>;

export default EmptyResult;
