import React from 'react';

import Message from '../Message';

const Loader = ({ text }) => (
  <Message>
    <h2>{text}</h2>
  </Message>
);

Loader.defaultProps = {
  text: 'Загрузка',
};

export default Loader;
