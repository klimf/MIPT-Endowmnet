/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.Header.header',
    defaultMessage: 'This is the Header component !',
  },
  navigation: [
    {
      id: 'app.components.Header.NavList.Item1',
      defaultMessage: 'Work',
      link: '/work',
    },
    {
      id: 'app.components.Header.NavList.Item2',
      defaultMessage: 'About',
      link: '/about',
    },
    {
      id: 'app.components.Header.NavList.Item3',
      defaultMessage: 'Blog',
      link: '/blog',
    },
  ],
  button: {
    id: 'app.components.Header.Button',
    defaultMessage: 'Make an order',
  },
});
