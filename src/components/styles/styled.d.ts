import 'styled-components';

import type { ThemeProps } from './theme.ts';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ThemeProps['color'];
    font: ThemeProps['font'];
  }
}
