/*
 * AdminPanel Messages
 *
 * This contains all the text for the AdminPanel component.
 */
import { defineMessages } from 'react-intl';
import russianMessages from 'aor-language-russian';

export default defineMessages({
  header: {
    id: 'app.containers.AdminPanel.header',
    defaultMessage: 'This is AdminPanel container !',
  },
});

russianMessages.aor.page.not_found = 'Страница не найдена';
russianMessages.aor.message.not_found = 'Запрашиваемого ресурса не существует';
russianMessages.aor.action.back = 'Вернуться назад';

export const aorMessagesRu = russianMessages;
