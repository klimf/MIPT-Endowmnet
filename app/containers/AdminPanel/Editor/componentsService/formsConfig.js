import React from 'react';
import quotePreview from 'images/previews/quote-preview.jpg';
import facesPreview from 'images/previews/faces-preview.png';
import editorPreview from 'images/previews/editor-preview.png';
import navPreview from 'images/previews/nav-preview.png';
import imgsPreview from 'images/previews/images-prev.png';
import sharePreview from 'images/previews/share-preview.png';
// import listBlocksPreview from 'images/previews/list-blocks-preview.png';
import imageTextPreview from 'images/previews/image-text-preview.png';
// import tabsPreview from 'images/previews/tabs-preview.png';
// import chatPreview from 'images/previews/chat-preview.png';
import * as Forms from './forms';
import Image from '../../../../components/FullImage';

export const config = [
  {
    name: 'faces',
    form: Forms.PeopleRow,
    preview: <Image src={facesPreview} />,
  },
  {
    name: 'quote',
    form: Forms.Quote,
    preview: <Image src={quotePreview} />,
  },
  {
    name: 'editor',
    form: Forms.Editor,
    preview: <Image src={editorPreview} />,
  },
  {
    name: 'navigation',
    form: Forms.Navigation,
    preview: <Image src={navPreview} />,
  },
  {
    name: 'Images',
    form: Forms.Images,
    preview: <Image src={imgsPreview} />,
  },
  {
    name: 'share',
    form: Forms.Share,
    preview: <Image src={sharePreview} />,
  },
  // {
  //   name: 'listBlocks',
  //   form: Forms.ListBlocks,
  //   preview: <Image src={listBlocksPreview} />,
  // },
  {
    name: 'imageText',
    form: Forms.ImageText,
    preview: <Image src={imageTextPreview} />,
  },
  // {
  //   name: 'tabs',
  //   form: Forms.Images,
  //   preview: <Image src={tabsPreview} />,
  // },
  // {
  //   name: 'chat',
  //   form: Forms.Images,
  //   preview: <Image src={chatPreview} />,
  // },
];

export default (name) => {
  const configItem = config.find((form) => name === form.name);
  return configItem ? configItem.form : null;
};
