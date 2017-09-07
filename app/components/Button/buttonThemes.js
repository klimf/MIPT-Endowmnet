import { palette } from '../../utils/constants';

const buttonThemes = {
  border: {
    bgColor: palette.transparent,
    borderColor: palette.primary,
    textColor: palette.black,
    shadow: 'none',
    bgColorHover: palette.primary,
    borderColorHover: palette.primary,
    textColorHover: palette.white,
    shadowHover: 'none',
  },
  primary: {
    bgColor: palette.primary,
    borderColor: palette.transparent,
    textColor: palette.white,
    shadow: `0 0 0 ${palette.dark}`,
    bgColorHover: palette.primary,
    textColorHover: palette.white,
    borderColorHover: palette.transparent,
    shadowHover: `0 12px 24px ${palette.dark}`,
  },
};

export default buttonThemes;
