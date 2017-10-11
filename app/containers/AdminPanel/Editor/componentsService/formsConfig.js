import React from 'react';
import quotePreview from 'images/previews/quote-preview.jpg';
import facesPreview from 'images/previews/faces-preview.png';
import * as Forms from './';
import Image from '../../../../components/FullImage';

export default [
  {
    name: 'quote',
    form: Forms.PeopleRow,
    preview: <Image src={quotePreview} />,
  },
  {
    name: 'faces',
    form: Forms.Quote,
    preview: <Image src={facesPreview} />,
  },
];
