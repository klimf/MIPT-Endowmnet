import createImagePlugin from 'draft-js-image-plugin';

import { composeDecorators } from 'draft-js-plugins-editor';

import { alignmentPlugin, resizeablePlugin, focusPlugin, blockDndPlugin } from './common';


const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });


export default imagePlugin;
