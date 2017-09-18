import React from 'react';
import { rules } from 'react-validation/lib/build/validation.rc';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
const Hint = (message) => (
  <FormattedMessage {...message} />
);
export default Object.assign(rules, {
  password: {
    rule: (val) => (val < 16 && val > 8),
    hint: Hint(messages.passwordIsInvalid),
  },
});
