/**
*
* Chat
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../utils/constants';

const Message = styled.div`
  padding: 9px 24px;
  margin: 24px 0 0 0;
  max-width: 90%;
  font-size: 20px;
  float: ${(props) => props.isRight ? 'right' : 'left'};
  background-color: ${(props) => props.isRight ? palette.disabled : palette.primary};
  color: ${(props) => props.isRight ? palette.black : palette.white};
  border-radius: ${(props) => props.isRight ? '8px 0 8px 8px' : '0 8px 8px 8px'};
`;

const MessageWrapper = styled.div`
  width: 100%;
  display: inline-block;
`;

function Chat(props) {
  return (
    <div>
      {props.messages.map((item, index) => (
        <MessageWrapper key={index}>
          <Message isRight={item.isRight}>
            {item.text}
          </Message>
        </MessageWrapper>
      ))}
    </div>
  );
}

Chat.defaultProps = {
  messages: [
    {
      isRight: true,
      text: 'Кто вы такой и чем вообще занимаетесь?',
    },
    {
      isRight: false,
      text: 'Я председатель управления фонда',
    },
    {
      isRight: true,
      text: 'Каким образом?',
    },
    {
      isRight: false,
      text: 'Таким образом, при подаче налоговой декларации в следующем финансовом году физическое лицо вправе потребовать применения вычета в размере 25% дохода и получить назад, написав в налоговую, заявление о перечислении себе',
    },
  ],
};

Chat.propTypes = {
  messages: PropTypes.array,
};

export default Chat;
