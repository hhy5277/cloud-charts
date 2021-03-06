import React from 'react';

import { storiesOf } from '@storybook/react';
import { Wtreemap, Wcontainer } from '@alicloud/cloud-charts';
import mobile from './data/mobile.json';

const data = {
  name: 'root',
  children: [
    { name: '分类 1', value: 560 },
    { name: '分类 2', value: 500 },
    { name: '分类 3', value: 150 },
    { name: '分类 4', value: 140 },
    { name: '分类 5', value: 115 },
    { name: '分类 6', value: 95 },
    { name: '分类 7', value: 90 },
    { name: '分类 8', value: 75 },
    { name: '分类 9', value: 98 },
    { name: '分类 10', value: 60 },
    { name: '分类 11', value: 45 },
    { name: '分类 12', value: 40 },
    { name: '分类 13', value: 40 },
    { name: '分类 14', value: 35 },
    { name: '分类 15', value: 40 },
    { name: '分类 16', value: 40 },
    { name: '分类 17', value: 40 },
    { name: '分类 18', value: 30 },
    { name: '分类 19', value: 28 },
    { name: '分类 20', value: 16 },
  ],
};

const stories = storiesOf('Wtreemap', module);

stories.add('矩形树图', () => (
  <Wcontainer className="demos">
    <Wtreemap height="600" data={data} />
  </Wcontainer>
));

stories.add('极坐标矩形树图', () => (
  <Wcontainer className="demos">
    <Wtreemap
      height="1000"
      config={{
        polar: true,
      }}
      data={data}
    />
  </Wcontainer>
));

stories.add('嵌套矩形树图', () => (
  <Wcontainer className="demos">
    <Wtreemap
      height="600"
      data={{
        name: 'root',
        children: mobile,
      }}
    />
  </Wcontainer>
));

stories.add('极坐标嵌套矩形树图', () => (
  <Wcontainer className="demos">
    <Wtreemap
      height="1000"
      config={{
        polar: true,
      }}
      data={{
        name: 'root',
        children: mobile,
      }}
    />
  </Wcontainer>
));
