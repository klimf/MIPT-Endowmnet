import React from 'react';
import Faces from '../Faces';
import Quote from '../Quotes/Item';
import { ContentPresentor } from '../../containers/AdminPanel/Editor';
import { Navigation, NavItem } from '../Navigation';
import Partners from '../Partners';
import Share from '../Share';
import { resolveLink } from '../../utils/helpers';
import ImgContent from '../ImgContent/index';
import { ImgContentCss } from '../../containers/AboutPage/index';

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
          <NavItem key={index} to={resolveLink(item.link)}>
            {item.name}
          </NavItem>
        )}
      </Navigation>,
  },
  {
    name: 'Images',
    strategy: (data, key) =>
      <Partners key={key} {...data} />,
  },
  {
    name: 'share',
    strategy: (data, key) =>
      <Share key={key} {...data} />,
  },
  {
    name: 'imageText',
    strategy: (data, key) =>
      <ImgContent reverse={!data.isLeft} styles={ImgContentCss} vertPadding={8} key={key} image={data.image.small} imgWidth={200} shadow rounded>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </ImgContent>,
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
