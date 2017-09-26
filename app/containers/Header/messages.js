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
      defaultMessage: 'О фонде',
      link: '/about',
    },
    {
      id: 'app.components.Header.NavList.Item2',
      defaultMessage: 'Новости',
      link: '/news',
    },
    {
      id: 'app.components.Header.NavList.Item3',
      defaultMessage: 'Дарители',
      link: '/stories',
    },
    {
      id: 'app.components.Header.NavList.Item4',
      defaultMessage: 'Целевые капиталы',
      link: '/capitals',
    },
    {
      id: 'app.components.Header.NavList.Item5',
      defaultMessage: 'УК',
      link: '/companies',
    },
    {
      id: 'app.components.Header.NavList.Item6',
      defaultMessage: 'Достижения',
      link: '/achievements',
    },
    {
      id: 'app.components.Header.NavList.Item7',
      defaultMessage: 'FAQ',
      link: '/faq',
    },
  ],
  action: {
    id: 'app.components.Header.Button.Action',
    defaultMessage: 'Пожертвовать',
  },
  enter: {
    id: 'app.components.Header.Button.Enter',
    defaultMessage: 'Войти',
  },
});
