
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { palette } from '../../utils/constants';

export default getMuiTheme({
  fontFamily: 'PT Sans, sans-serif',
  palette: {
    primary1Color: palette.primary,
    primary2Color: palette.secondary,
    primary3Color: palette.primary,
    accent1Color: palette.accent,
    accent2Color: palette.accent,
    accent3Color: palette.accent,
    textColor: palette.dark,
    alternateTextColor: palette.white,
    canvasColor: palette.background,
    borderColor: palette.gray,
    disabledColor: palette.disabled,
    pickerHeaderColor: palette.white,
    clockCircleColor: palette.primary,
    shadowColor: palette.black,
  },
});
