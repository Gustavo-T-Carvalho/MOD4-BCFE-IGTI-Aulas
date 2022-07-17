import { useState } from 'react';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';

const StyledHeader = styled.h1`
  color: ${props => props.theme.main};
  font-size: 42px;
`;

const StyledData = styled('p')`
  color: ${props => props.theme.secondary};
  font-size: 24px;
  font-weight: 700;
`;

type TStyledButtonProps = {
  variant?: 'success' | 'failed';
};

const RotateKeyFrame = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

const Rotate = styled.div`
  animation: ${RotateKeyFrame} 0.5s infinite;
  width: 100px;
`;

const StyledButton = styled.button<TStyledButtonProps>`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid black;
  padding: 8px 16px;
  :hover {
    cursor: pointer;
    /* animation: ${RotateKeyFrame} 0.5s; */
    background-color: lightgrey;
  }

  ${props => {
    if (props.variant === 'success') {
      return css`
        border-color: green;
        color: green;
      `;
    }

    if (props.variant === 'failed') {
      return css`
        border-color: red;
        color: red;
      `;
    }
  }}
`;

const themeBlue = {
  main: 'purple',
  secondary: 'blue',
};

const themeRed = {
  main: 'red',
  secondary: 'orange',
};

// const StyledSuccessButton = styled(StyledButton)`
//   border-color: green;
//   color: green;
// `;

// const StyledFailButton = styled(StyledButton)`
//   border-color: red;
//   color: red;
// `;

// const StyledHoverButton = styled.button`
//   color: red;

//   &:hover {
//     cursor: pointer;
//   }
// `;

export default function App() {
  const [theme, setTheme] = useState(themeBlue);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledHeader>Gustavo Teixeira</StyledHeader>
        <div>
          <StyledButton
            onClick={() => {
              setTheme(themeBlue);
            }}
          >
            Set Blue theme
          </StyledButton>
          <StyledButton
            style={{ marginLeft: '8px' }}
            onClick={() => {
              setTheme(themeRed);
            }}
          >
            Set red theme
          </StyledButton>
        </div>
        <StyledHoverButton>teste hover</StyledHoverButton>
        <Rotate>Teste Rotate</Rotate>
        <StyledData>gustavo@email.com</StyledData>
        <StyledData>31-999999999</StyledData>
        <StyledData>Brasil</StyledData>
        <StyledButton variant="success"> Adicionar </StyledButton>
        <StyledButton style={{ marginLeft: '8px' }} variant="failed">
          Remover
        </StyledButton>
        <StyledButton style={{ marginLeft: '8px' }}>Detalhes</StyledButton>
      </ThemeProvider>
    </div>
  );
}
