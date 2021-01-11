import React from 'react';
import renderer from 'react-test-renderer';
import { camelize } from '../../../utils/parsers';
import dataMock from './mockData.json'
import WeatherList from './WeatherList';

test('WeatherList render without loading', () => {
  const component = renderer.create(
    <WeatherList data={camelize(dataMock)} loading={false} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('WeatherList render with loading', () => {
  const component = renderer.create(
    <WeatherList data={camelize(dataMock)} loading={true} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});