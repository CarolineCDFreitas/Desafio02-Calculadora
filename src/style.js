import { styled, createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#root, html {
  height: 100%;
}

body {
    background-color: #b3e800;
    border: 3px solid #fff;
    height: 100%;
}
`;

const FlexboxCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  ${FlexboxCenter};
  flex-direction: column;
  height: 100%;
  margin: 0 0.2em;
`;

export const ConteinerInput = styled.section`
  ${FlexboxCenter};
  margin: 1.5em;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ConteinerButton = styled.section`
  ${FlexboxCenter};
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  max-width: 950px;
  width: 100%;
  padding: 0.5em;

  @media (max-width: 600px) {
    max-width: 300px;
  }
`;

export const Titulo = styled.h1`
  font-size: 3rem;
  color: #48346e;
  text-align: center;
  text-shadow: 2px 2px 5px #f5fbe0;
  margin: 0.2em;
`;

export const Input = styled.input`
  font-size: 1.4rem;
  text-align: center;
  margin: 0.5rem;
  padding: 0.5em;
  border: none;
  border-radius: 3rem;

  &:focus {
    border: 2px solid #8e00e8;
    outline: none;
    box-shadow: 0 0 5px rgba(142, 0, 232, 0.8);
  }
`;

export const Resultado = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 0.5em;
  min-height: 3rem;
`;

export const Button = styled.button`
  font-size: 1.4rem;
  text-align: center;
  color: #2f0b0b;
  min-width: 5rem;
  padding: 0.2em;
  background-color: #c5f1f1;
  border: 5px double #8e00e880;
  border-radius: 0.3rem;
  transition: background-color ease 0.5s;
  box-shadow: 0 5px #999;

  &:active {
    background-color: #d4f285;
    box-shadow: 0 4px #666;
    transform: translateY(4px);
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: #d4f285;
    }
  }
`;
