import React from 'react';
import { rules } from 'react-validation/lib/build/validation.rc';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Hint = (message) => (
  <FormattedMessage {...message} />
);

export default Object.assign(rules, {
  required: {
    rule: (val) => val || false,
    hint: () => Hint(messages.requiredIsInvalid),
  },
  password: {
    rule: (val) => val && (val.length < 16 && val.length > 8),
    hint: () => Hint(messages.passwordIsInvalid),
  },
  email: {
    rule: (val) => {
      const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line
      return reg.test(val);
    },
    hint: () => Hint(messages.emailIsInvalid),
  },
  passwordCheck: {
    rule: (val, components) => components.password && components.password.state.value === val,
    hint: () => Hint(messages.passwordCheckIsInvalid),
  },
});

