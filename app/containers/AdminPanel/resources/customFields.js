import React, { PropTypes } from 'react';
import { resolveStatic } from 'utils/helpers';

export const StaticImage = ({ source, record = {} }) => {
  const image = record[source] ? record[source].small : '';
  const resolvedImage = resolveStatic(image, true);
  return (<img
    style={{
      'max-height': '150px;',
    }} alt="" src={resolvedImage}
  />);
};

StaticImage.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};
