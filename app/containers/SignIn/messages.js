/*
 * SignIn Messages
 *
 * This contains all the text for the SignIn component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  formTitle: {
    id: 'app.containers.SignIn.formTitle',
    defaultMessage: 'Вход на сайт',
  },
  loginLabel: {
    id: 'app.containers.SignIn.loginLabel',
    defaultMessage: 'Почта',
  },
  passwordLabel: {
    id: 'app.containers.SignIn.passwordLabel',
    defaultMessage: 'Пароль',
  },
  signIButton: {
    id: 'app.containers.SignIn.signIButton',
    defaultMessage: 'Войти',
  },
  recoveryPasswordFormTitle: {
    id: 'app.containers.SignIn.recoveryPasswordFormTitle',
    defaultMessage: 'Придумайте пароль',
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
  credentialsIsInvalid: {
    id: 'app.containers.SignIn.credentialsIsInvalid',
    defaultMessage: 'Неверные данные, не удалось войти',
  },
});
