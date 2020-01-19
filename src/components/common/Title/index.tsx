import React from 'react';

import * as S from './styles';

type Props = {
  Subtitle: React.FC;
} & React.FC;

const Title: Props = ({ children }): React.ReactElement => <S.Title>{children}</S.Title>;

const Subtitle: React.FC = ({ children }): React.ReactElement => (
  <S.Subtitle>{children}</S.Subtitle>
);

Title.Subtitle = Subtitle;

export default Title;
