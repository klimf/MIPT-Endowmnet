import { defineMessages } from 'react-intl';

export default defineMessages({
  loginLabel: {
    id: 'app.containers.SignIn.loginLabel',
    defaultMessage: 'Почта',
  },
  passwordLabel: {
    id: 'app.containers.SignIn.passwordLabel',
    defaultMessage: 'Пароль',
  },
  passwordCheckLabel: {
    id: 'app.containers.SignIn.passwordCheckLabel',
    defaultMessage: 'Проверка',
  },
  passwordIsInvalid: {
    id: 'app.containers.SignIn.passwordIsInvalid',
    defaultMessage: 'Пароль должен содержать от 8 до 16 символов',
  },
  passwordCheckIsInvalid: {
    id: 'app.containers.SignIn.passwordCheckIsInvalid',
    defaultMessage: 'Пароли не совпадают',
  },
  emailIsInvalid: {
    id: 'app.containers.SignIn.emailIsInvalid',
    defaultMessage: 'E-mail должен быть валидным',
  },
  requiredIsInvalid: {
    id: 'app.containers.SignIn.emailIsInvalid',
    defaultMessage: 'Обязательное поле',
  },
});
