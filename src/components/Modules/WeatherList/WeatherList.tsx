import React from 'react'
import Text from '../../UI-Kits/Text'
import { ConsolidatedWeather } from '../../../containers/Weather/types';
import { StyledDayTitle, StyledWeatherList, StyledWeatherListItem, StyledImageLR } from './WeatherList.styled';
import { WeatherListProps } from './WeatherList.types';
import { getDay } from 'date-fns';
import { DAY_MAP_I18N } from './constants';
import { useTranslation } from 'react-i18next';

export default function WeatherList(props: WeatherListProps) {
  const { t } = useTranslation()
  return (
    <StyledWeatherList>
      {
        props.loading
        ? <StyledWeatherListItem loading />
        : props.data?.map((item: ConsolidatedWeather) => (
            <StyledWeatherListItem>
              <StyledDayTitle>Day: {t(DAY_MAP_I18N[getDay(new Date(item.applicableDate))])}</StyledDayTitle>
              <Text>Min: {Math.round(item.minTemp)} °C</Text>
              <Text>Max: {Math.round(item.maxTemp)} °C</Text>
              <StyledImageLR src={`https://www.metaweather.com/static/img/weather/${item.weatherStateAbbr}.svg`} />
            </StyledWeatherListItem>
          ))
      }
    </StyledWeatherList>
  )
}