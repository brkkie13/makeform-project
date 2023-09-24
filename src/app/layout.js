'use client';

import MainNavigation from '../../components/layout/main-navigation';
import StyledComponentsRegistry from '../../lib/registry';
import GlobalStyle from '@/\bstyles/GlobalStyles';
import theme from '@/\bstyles/Theme';
import { ThemeProvider } from 'styled-components';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <html lang="ko">
          <body>
            <MainNavigation />
            {children}
          </body>
        </html>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
