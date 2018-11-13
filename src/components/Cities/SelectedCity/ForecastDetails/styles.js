import styled from 'styled-components';

export const StyledForecastWrapper = styled.div`
  grid-area: city-forecast;
  max-width: calc(100% - 25px * 2);
  margin: 30px auto 0;

  @media screen and (min-width: 600px) {
    margin: 0 auto;
  }
`;

export const StyledForecastItem = styled.div`
  outline: none;
`;

export const StyledForecastItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  margin-top: 5px;
`;

export const StyledDescription = styled.div`
  height: 2.3em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledItemDetailsList = styled.dl`
  display: grid;
  grid-template-columns: [fd-icon] fit-content(20%) [fd-desc] auto;
  grid-gap: 5px;
  padding-right: 10px;
  margin: 0;
  margin-top: 5px;
  color: var(--light-gray);
`;

export const StyledIcon = styled.dt`
  grid-column: fd-icon;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const StyledIconDescription = styled.dd`
  grid-column: fd-desc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
`;

export const StyledDivider = styled.hr`
  border: 0;
  border-top: 1px solid var(--gray);
  margin: 5px 0;
`;
