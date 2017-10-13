import React from 'react';
import Faces from '../Faces';
import Quote from '../Quotes/Item';
import { ContentPresentor } from '../../containers/AdminPanel/Editor';
import { Navigation, NavItem } from '../Navigation';

export const config = [
  {
    name: 'faces',
    strategy: (data, key) => <Faces key={key} {...data} />,
  },
  {
    name: 'quote',
    strategy: (data, key) => <Quote key={key} {...data} />,
  },
  {
    name: 'editor',
    strategy: (data, key) => <ContentPresentor key={key} raw={data} />,
  },
  {
    name: 'navigation',
    strategy: (data, key) =>
      <Navigation key={key} >
        {data.items.map((item, index) =>
          <NavItem key={index} href={item.link}>
            {item.name}
          </NavItem>
        )}
      </Navigation>,
  },
];

export default (content) => {
  try {
    const parsedContent = JSON.parse(content);
    if (!Array.isArray(parsedContent)) {
      throw new Error('invalid data');
    }
    return parsedContent.map((block, index) => {
      const component = config.find((x) => x.name === block.type);
      if (!component) {
        console.log(block);
        return null;
      }
      return component.strategy(block.data, index);
    });
  } catch (e) {
    console.error(e);
    return [];
  }
};
