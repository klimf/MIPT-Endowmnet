import React from 'react';
import quotePreview from 'images/previews/quote-preview.jpg';
import facesPreview from 'images/previews/faces-preview.png';
import editorPreview from 'images/previews/editor-preview.png';
import navPreview from 'images/previews/nav-preview.png';
import imgsPreview from 'images/previews/images-prev.png';
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
];

export default (name) => {
  const configItem = config.find((form) => name === form.name);
  return configItem ? configItem.form : null;
};
