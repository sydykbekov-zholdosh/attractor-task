import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import { ThemeWrapper, theme, TextareaGlobalStyle } from './ThemeStyle';

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <TextareaGlobalStyle />
      <ThemeWrapper>{children}</ThemeWrapper>
    </MuiThemeProvider>
  );
}
