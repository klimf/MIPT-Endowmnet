import React from 'react';
import {
    ShareButtons,
    generateShareIcon,
  } from 'react-share';
import styled from 'styled-components';
import Title from '../Title';
import Space from '../Space';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    VKShareButton,
    OKShareButton,
  } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');

const ShareWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  svg {
    fill: white !important;
  }
`;

function Share(props) {
  return (
    <div>
      <Title>Поделиться</Title>
      <Space size={2}></Space>
      <ShareWrapper>
        <FacebookShareButton {...props} url={window.location.href}>
          <FacebookIcon size={32} round logoFillColor={'white'}></FacebookIcon>
        </FacebookShareButton>
        <GooglePlusShareButton {...props} url={window.location.href}>
          <GooglePlusIcon size={32} round logoFillColor={'white'}></GooglePlusIcon>
        </GooglePlusShareButton>
        <TwitterShareButton {...props} url={window.location.href}>
          <TwitterIcon size={32} round logoFillColor={'white'}></TwitterIcon>
        </TwitterShareButton>
        <TelegramShareButton {...props} url={window.location.href}>
          <TelegramIcon size={32} round logoFillColor={'white'}> </TelegramIcon>
        </TelegramShareButton>
        <WhatsappShareButton {...props} url={window.location.href}>
          <WhatsappIcon size={32} round logoFillColor={'white'}></WhatsappIcon>
        </WhatsappShareButton>
        <VKShareButton {...props} url={window.location.href}>
          <VKIcon size={32} round logoFillColor={'white'}></VKIcon>
        </VKShareButton>
        <OKShareButton {...props} url={window.location.href}>
          <OKIcon size={32} round logoFillColor={'white'}></OKIcon>
        </OKShareButton>
      </ShareWrapper>
      <Space size={2}></Space>
    </div>

  );
}

export default Share;
