import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createEmbedPlugin from 'draft-js-embed-plugin';
import 'draft-js-embed-plugin/lib/plugin.css';
import 'draft-js-linkify-plugin/lib/plugin.css';
import createLinkPlugin from 'draft-js-link-plugin';
import 'draft-js-alignment-plugin/lib/plugin.css';


export const embedPlugin = createEmbedPlugin();
export const focusPlugin = createFocusPlugin();
export const resizeablePlugin = createResizeablePlugin();
export const blockDndPlugin = createBlockDndPlugin();
export const alignmentPlugin = createAlignmentPlugin();
export const linkifyPlugin = createLinkifyPlugin();
export const { AlignmentTool } = alignmentPlugin;
export const linkPlugin = createLinkPlugin();
