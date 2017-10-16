import React from 'react';
import {
    ShareButtons,
    generateShareIcon,
  } from 'react-share';
import styled from 'styled-components';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    EmailShareButton,
  } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

const ShareWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Share(props) {
  return (
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
      <PinterestShareButton {...props} url={window.location.href}>
        <PinterestIcon size={32} round logoFillColor={'white'}></PinterestIcon>
      </PinterestShareButton>
      <VKShareButton {...props} url={window.location.href}>
        <VKIcon size={32} round logoFillColor={'white'}></VKIcon>
      </VKShareButton>
      <OKShareButton {...props} url={window.location.href}>
        <OKIcon size={32} round logoFillColor={'white'}></OKIcon>
      </OKShareButton>
      <RedditShareButton {...props} url={window.location.href}>
        <RedditIcon size={32} round logoFillColor={'white'}></RedditIcon>
      </RedditShareButton>
      <EmailShareButton {...props} url={window.location.href}>
        <EmailIcon round logoFillColor={'white'} size={32}></EmailIcon>
      </EmailShareButton>
    </ShareWrapper>
  );
}

export default Share;
