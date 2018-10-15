import styled from 'styled-components';

export const StyledForecastWrapper = styled.div`
  max-width: calc(100% - 25px * 2);
  margin: 30px auto 0;
`;

export const StyledForecastItem = styled.div`
  outline: none;
`;

export const StyledForecastItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const StyledForecastItemDescription = styled.div`
  display: block;
  height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledForecastItemHumidity = styled(StyledForecastItemDetail)`
  flex-direction: row;
  color: var(--light-gray);
`;

export const StyledForecastItemWind = styled(StyledForecastItemDetail)`
  flex-direction: row;
  color: var(--light-gray);
`;

export const StyledForecastItemDivider = styled.hr`
  border: 0;
  border-top: 1px solid var(--gray);
  margin: 10px 0 5px 0;
`;
