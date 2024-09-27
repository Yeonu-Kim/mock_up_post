import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './components/styles/GlobalStyle.styled.tsx';
import { theme } from './components/styles/theme.ts';
import { MainPage } from './pages/MainPage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  );
};
