'use strict'

const Color = require('color')

const gruvboxRedColor = '#cc241d'
const gruvboxGreenColor = '#98971a'
const gruvboxYellowColor = '#d79921'
const gruvboxBlueColor = '#458588'
const gruvboxPurpleColor = '#b16286'
const gruvboxAquaColor = '#689d6a'
const gruvboxGreyColor = '#928374'
const gruvboxOrangeColor = '#d65d0e'

const gruvboxLightRedColor = '#fb4934'
const gruvboxLightGreenColor = '#b8bb26'
const gruvboxLightYellowColor = '#fabd2f'
const gruvboxLightBlueColor = '#83a598'
const gruvboxLightPurpleColor = '#d3869b'
const gruvboxLightAquaColor = '#8ec07c'
const gruvboxLightGreyColor = '#a89984'
// const gruvboxLightOrangeColor = '#fe8019'

const gruvboxDarkRedColor = '#9d0006'
const gruvboxDarkGreenColor = '#79740e'
const gruvboxDarkYellowColor = '#b57614'
const gruvboxDarkBlueColor = '#076678'
const gruvboxDarkPurpleColor = '#8f3f71'
const gruvboxDarkAquaColor = '#427b58'
const gruvboxDarkGreyColor = '#7c6f64'
// const gruvboxDarkOrangeColor = '#af3a03'

const gruvboxDarkColorSoftConstrast = '#32302f'
const gruvboxDarkColor = '#282828'
const gruvboxDarkColorHardConstrast = '#1d2021'
const gruvboxDarkColorOption1 = '#3c3836'
const gruvboxDarkColorOption2 = '#504945'
const gruvboxDarkColorOption3 = '#665c54'
const gruvboxDarkColorOption4 = '#7c6f64'

const gruvboxLightColorSoftConstrast = '#f2e5bc'
const gruvboxLightColor = '#fbf1c7'
const gruvboxLightColorHardConstrast = '#f9f5d7'
const gruvboxLightColorOption1 = '#ebdbb2'
const gruvboxLightColorOption2 = '#d5c4a1'
const gruvboxLightColorOption3 = '#bdae93'
const gruvboxLightColorOption4 = '#a89984'

const darkThemeTerminalBlack = gruvboxDarkColor
const darkThemeTerminalRed = gruvboxRedColor
const darkThemeTerminalGreen = gruvboxGreenColor
const darkThemeTerminalYellow = gruvboxYellowColor
const darkThemeTerminalBlue = gruvboxBlueColor
const darkThemeTerminalMagenta = gruvboxPurpleColor
const darkThemeTerminalCyan = gruvboxAquaColor
const darkThemeTerminalWhite = gruvboxLightGreyColor

const darkThemeTerminalBrightBlack = gruvboxGreyColor
const darkThemeTerminalBrightRed = gruvboxLightRedColor
const darkThemeTerminalBrightGreen = gruvboxLightGreenColor
const darkThemeTerminalBrightYellow = gruvboxLightYellowColor
const darkThemeTerminalBrightBlue = gruvboxLightBlueColor
const darkThemeTerminalBrightMagenta = gruvboxLightPurpleColor
const darkThemeTerminalBrightCyan = gruvboxLightAquaColor
const darkThemeTerminalBrightWhite = gruvboxLightColorOption1

const darkThemeTerminalForeground = gruvboxLightColorOption1
const darkThemeTerminalBackgroundSoftContrast = gruvboxDarkColorSoftConstrast
const darkThemeTerminalBackground = gruvboxDarkColor
const darkThemeTerminalBackgroundHardContrast = gruvboxDarkColorHardConstrast

const lightThemeTerminalBlack = gruvboxLightColor
const lightThemeTerminalRed = gruvboxRedColor
const lightThemeTerminalGreen = gruvboxGreenColor
const lightThemeTerminalYellow = gruvboxYellowColor
const lightThemeTerminalBlue = gruvboxBlueColor
const lightThemeTerminalMagenta = gruvboxPurpleColor
const lightThemeTerminalCyan = gruvboxAquaColor
const lightThemeTerminalWhite = gruvboxDarkGreyColor

const lightThemeTerminalBrightBlack = gruvboxGreyColor
const lightThemeTerminalBrightRed = gruvboxDarkRedColor
const lightThemeTerminalBrightGreen = gruvboxDarkGreenColor
const lightThemeTerminalBrightYellow = gruvboxDarkYellowColor
const lightThemeTerminalBrightBlue = gruvboxDarkBlueColor
const lightThemeTerminalBrightMagenta = gruvboxDarkPurpleColor
const lightThemeTerminalBrightCyan = gruvboxDarkAquaColor
const lightThemeTerminalBrightWhite = gruvboxDarkColorOption1

const lightThemeTerminalForeground = gruvboxDarkColorOption1
const lightThemeTerminalBackgroundSoftContrast = gruvboxLightColorSoftConstrast
const lightThemeTerminalBackground = gruvboxLightColor
const lightThemeTerminalBackgroundHardContrast = gruvboxLightColorHardConstrast

var terminalColors = {
  dark: {
    black: darkThemeTerminalBlack,
    red: darkThemeTerminalRed,
    green: darkThemeTerminalGreen,
    yellow: darkThemeTerminalYellow,
    blue: darkThemeTerminalBlue,
    magenta: darkThemeTerminalMagenta,
    cyan: darkThemeTerminalCyan,
    white: darkThemeTerminalWhite,
    lightBlack: darkThemeTerminalBrightBlack,
    lightRed: darkThemeTerminalBrightRed,
    lightGreen: darkThemeTerminalBrightGreen,
    lightYellow: darkThemeTerminalBrightYellow,
    lightBlue: darkThemeTerminalBrightBlue,
    lightMagenta: darkThemeTerminalBrightMagenta,
    lightCyan: darkThemeTerminalBrightCyan,
    lightWhite: darkThemeTerminalBrightWhite
  },
  light: {
    black: lightThemeTerminalBlack,
    red: lightThemeTerminalRed,
    green: lightThemeTerminalGreen,
    yellow: lightThemeTerminalYellow,
    blue: lightThemeTerminalBlue,
    magenta: lightThemeTerminalMagenta,
    cyan: lightThemeTerminalCyan,
    white: lightThemeTerminalWhite,
    lightBlack: lightThemeTerminalBrightBlack,
    lightRed: lightThemeTerminalBrightRed,
    lightGreen: lightThemeTerminalBrightGreen,
    lightYellow: lightThemeTerminalBrightYellow,
    lightBlue: lightThemeTerminalBrightBlue,
    lightMagenta: lightThemeTerminalBrightMagenta,
    lightCyan: lightThemeTerminalBrightCyan,
    lightWhite: lightThemeTerminalBrightWhite
  }
}

var terminalBackgrounds = {
  dark: {
    soft: darkThemeTerminalBackgroundSoftContrast,
    normal: darkThemeTerminalBackground,
    hard: darkThemeTerminalBackgroundHardContrast
  },
  light: {
    soft: lightThemeTerminalBackgroundSoftContrast,
    normal: lightThemeTerminalBackground,
    hard: lightThemeTerminalBackgroundHardContrast
  }
}

var terminalForegrounds = {
  dark: darkThemeTerminalForeground,
  light: lightThemeTerminalForeground
}

var backgroundColorOptions = {
  dark: {
    option1: gruvboxDarkColorOption1,
    option2: gruvboxDarkColorOption2,
    option3: gruvboxDarkColorOption3,
    option4: gruvboxDarkColorOption4
  },
  light: {
    option1: gruvboxLightColorOption1,
    option2: gruvboxLightColorOption2,
    option3: gruvboxLightColorOption3,
    option4: gruvboxLightColorOption4
  }
}

exports.decorateConfig = config => {
  var themeStyle = config.gruvboxTheme.style || 'dark'
  var themeContrast = config.gruvboxTheme.contrast || 'normal'
  var terminalForegroundColor = terminalForegrounds[themeStyle]
  var terminalBackgroundColor = terminalBackgrounds[themeStyle][themeContrast]
  var backgroundColors = backgroundColorOptions[themeStyle]
  var backgroundColorForActiveTab = backgroundColors.option1

  return Object.assign({}, config, {
    foregroundColor: terminalForegroundColor,
    backgroundColor: terminalBackgroundColor,
    colors: terminalColors[themeStyle],
    cursorColor: Color(gruvboxOrangeColor).alpha(0.7).string(),
    css: `
      ${config.css || ''}
      .tabs_list,
      .tab_tab,
      .tabs_borderShim {
        color: ${terminalForegroundColor} !important;
        background-color: ${terminalBackgroundColor} !important;
        border-color: transparent !important;
      }
      .tab_active {
        background-color: ${backgroundColorForActiveTab} !important;
        border-left: 2px ${gruvboxOrangeColor} solid !important;
      }
    `
  })
}
