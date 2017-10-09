import React, { PropTypes } from 'react';
import { resolveStatic } from 'utils/helpers';

export const StaticImage = ({ source, record = {} }) => {
  const image = record[source] ? record[source].small : '';
  const resolvedImage = resolveStatic(image);
  return <img alt="" src={resolvedImage} />;
};

StaticImage.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
};
