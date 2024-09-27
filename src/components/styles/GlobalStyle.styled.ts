import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body, button, input, select, textarea {
	  font-family: "Pretendard Variable", Pretendard, Roboto, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
