import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props): React.ReactElement => <S.Title>{children}</S.Title>;

const Subtitle = ({ children }: Props): React.ReactElement => <S.Subtitle>{children}</S.Subtitle>;

Title.Subtitle = Subtitle;

export default Title;
