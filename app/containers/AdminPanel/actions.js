/*
 *
 * AdminPanel actions
 *
 */

import { createAction } from 'redux-act';
import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const addAttachment = createAction('ADD_ATTACHMENT');
export const deleteAttachment = createAction('DELETE_ATTACHMENT');
export const clearAttachments = createAction('CLEAR_ATTACHMENTS');
export const upload = createAction('UPLOAD');
export const UPLOAD = upload.getType();
