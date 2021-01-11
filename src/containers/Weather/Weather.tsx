import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedInput } from '../../utils/hooks';
import WeatherList from '../../components/Modules/WeatherList';
import { searchWeatherByCity } from './redux/action';
import { selectWeatherList, selectWeatherLoading } from './redux/selectors';
import { StyledWeather, StyledInput } from './Weather.styled';

export default function Weather() {
  const dispatch = useDispatch();
  const data = useSelector(selectWeatherList())
  const loading = useSelector(selectWeatherLoading())

  const [, setInputValue] = useDebouncedInput({
    value: '',
    onChange: (val: string) => {
      dispatch(searchWeatherByCity(val));
    },
  });

  return (
    <StyledWeather>
      <StyledInput placeholder="Your city" onChange={(e) => setInputValue(e.target.value)} />
      <WeatherList data={data} loading={loading} />
    </StyledWeather>
  )
}