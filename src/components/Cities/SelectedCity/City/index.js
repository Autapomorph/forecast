import React from 'react';
import Slider from 'react-slick';

import Title from '../../../common/Title';
import RetryButton from '../../../common/buttons/RetryButton';
import FeaturedButton from '../../../common/buttons/FeaturedButton';
import CountryFlag from '../../../common/icons/CountryFlag';
import WeatherIcon from '../../../common/icons/WeatherIcon';

import { StyledCityWrapper, StyledCityHeader } from './styles';

const City = ({
  city,
  isFeatured,
  refetchCityWeather,
  addCityToFeatured,
  removeCityFromFeatured,
}) => (
  <StyledCityWrapper>
    <StyledCityHeader>
      <Title>
        <span>
          <span>{city.name}</span>
          <span>&nbsp;</span>
          <CountryFlag country={city.country.toLowerCase()} />
          <span>&nbsp;</span>
          <span>{city.weather.timestamp}</span>
          <span>&nbsp;</span>
        </span>
        <RetryButton onClick={refetchCityWeather} />
      </Title>

      <FeaturedButton
        isFeatured={isFeatured}
        onRemove={() => removeCityFromFeatured(city.id)}
        onAdd={() =>
          addCityToFeatured({
            id: city.id,
            name: city.name,
            country: city.country,
            coords: city.coords,
          })
        }
      />
    </StyledCityHeader>

    <table>
      <tbody>
        <tr>
          <td>Описание</td>
          <td>
            {city.weather.description} <WeatherIcon icon={city.weather.weatherIcon} />
          </td>
        </tr>

        <tr>
          <td>Температура</td>
          <td>
            {city.weather.temp}
            &#8451;
          </td>
        </tr>

        <tr>
          <td>Облачность</td>
          <td>{city.weather.cloudiness}%</td>
        </tr>

        <tr>
          <td>Ветер</td>
          <td>
            {city.weather.windSpeed} м/с, {city.weather.windCardDir}
            &nbsp;
            <WeatherIcon wind icon={city.weather.windIcon} />
          </td>
        </tr>

        <tr>
          <td>Давление</td>
          <td>{city.weather.pressure} мм рт. ст.</td>
        </tr>

        <tr>
          <td>Влажность</td>
          <td>{city.weather.humidity}%</td>
        </tr>

        <tr>
          <td>День</td>
          <td>
            {city.weather.sunrise} &mdash; {city.weather.sunset}
          </td>
        </tr>
      </tbody>
    </table>

    <div style={{ maxWidth: 'calc(100% - 25px * 2)', margin: '0 auto', textAlign: 'center' }}>
      <Slider
        infinite={false}
        slidesToShow={5}
        slidesToScroll={5}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
      >
        {city.forecast.map(f => (
          <div key={f.timestamp}>
            <WeatherIcon icon={f.weatherIcon} />
            <br />
            {f.temp}
            &#8451;
            <br />
            {f.description}
            <br />
            {f.windSpeed} м/с,&nbsp;
            <WeatherIcon wind icon={f.windIcon} />
            <br />
            {f.timestampDM}
            <br />
            {f.timestamp}
          </div>
        ))}
      </Slider>
    </div>
  </StyledCityWrapper>
);

export default City;
