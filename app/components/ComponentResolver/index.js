import React from 'react';
import Faces from '../Faces';
import Quote from '../Quotes/Item';
import { ContentPresentor } from '../../containers/AdminPanel/Editor';

export const config = [
  {
    name: 'faces',
    strategy: (data, key) => <Faces key={key} {...data}></Faces>,
  },
  {
    name: 'quote',
    strategy: (data, key) => <Quote key={key} {...data}></Quote>,
  },
  {
    name: 'editor',
    strategy: (data, key) => <ContentPresentor key={key} raw={data}></ContentPresentor>,
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
        return null;
      }
      return component.strategy(block.data, index);
    });
  } catch (e) {
    console.log(e);
    return [];
  }
};
