import styled from 'styled-components/macro';

type Props = {
  gap?: string;
};

export const MarginRightDelimeter = styled.span`
  margin-right: ${({ gap = '0.3em' }: Props) => gap};
`;

export default MarginRightDelimeter;
