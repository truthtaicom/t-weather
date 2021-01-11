import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import WeatherList from './WeatherList';
import { WeatherListProps } from './WeatherList.types'

import dataMock from './mockData.json'
import { camelize } from '../../../utils/parsers';

export default {
  title: 'Modules/WeatherList',
  component: WeatherList,
} as Meta;

const Template: Story<WeatherListProps> = (args) => <WeatherList {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: camelize(dataMock),
  loading: false
};
