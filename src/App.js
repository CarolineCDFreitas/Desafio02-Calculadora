import { useState } from "react";
import * as S from "./style";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [resultado, setResultado] = useState("");

  //TODO: (outras possibilidades de verificação)
  //[] Aprender Regex;
  //[x] Desabilitar os botões com verificação dos valores de entrada!!

  //função genérica para capturar, filtrar e verificar esses valores, e a seubsequente conversão em número desses valores
  const capturandoValores = (e, setValor) => {
    const valor = e.target.value;

    //método para filtrar os valores. Necessário por conta do type="text", para evitar NaN;
    const ehNumero = [...valor].filter(
      (caracteres) => !isNaN(caracteres) && caracteres !== ""
    );

    //condicional para verificar se tem número, e, se sim, juntá-los e convertê-los em números para as operações aritméticas.
    const valorFiltrado = ehNumero.length > 0 ? Number(ehNumero.join("")) : "";

    setValor(valorFiltrado);
  };

  const capturandoPrimeiroValor = (e) => {
    capturandoValores(e, setPrimeiroValor);
  };

  const capturandoSegundoValor = (e) => {
    capturandoValores(e, setSegundoValor);
  };

  //funções que validam os valores, realizam as operações aritméticas e depois convertem os resultados para strings
  const soma = () => {
    if (primeiroValor !== "" && segundoValor !== "") {
      const resultadoSoma = Number(primeiroValor) + Number(segundoValor);
      setResultado(String(resultadoSoma));
    }
  };

  const subtracao = () => {
    if (primeiroValor !== "" && segundoValor !== "") {
      const resultadoSubtracao = Number(primeiroValor) - Number(segundoValor);
      setResultado(String(resultadoSubtracao));
    }
  };

  const multiplicacao = () => {
    if (primeiroValor !== "" && segundoValor !== "") {
      const resultadoMultiplicacao =
        Number(primeiroValor) * Number(segundoValor);
      setResultado(String(resultadoMultiplicacao));
    }
  };

  //verficação do segundo valor, caso contrário qualquer número dividido por 0 dá como resultado Infinity
  const divisao = () => {
    if (primeiroValor !== "" && segundoValor !== "") {
      const resultadoDivisao = Number(primeiroValor) / Number(segundoValor);
      segundoValor === 0
        ? (alert("Não é possível dividir por 0."), handleClear())
        : setResultado(String(resultadoDivisao));
    }
  };

  //função adicional para realizar a operação de porcentagem
  const porcentagem = () => {
    if (primeiroValor !== "" && segundoValor !== "") {
      const resultadoPorcentagem =
        (Number(primeiroValor) * Number(segundoValor)) / 100;
      setResultado(String(resultadoPorcentagem));
    }
  };

  //função adicional que reseta os campos indicados
  const handleClear = () => {
    setPrimeiroValor("");
    setSegundoValor("");
    setResultado("");
  };

  return (
    <S.Main>
      <S.GlobalStyle />
      <S.Titulo>Calculadora</S.Titulo>
      <S.ConteinerInput>
        <S.Input
          type="text"
          inputMode="numeric"
          name="primeiro input"
          value={primeiroValor}
          placeholder="Digite o primeiro número"
          onChange={capturandoPrimeiroValor}
          autoFocus
          autoComplete="off"
        />
        <S.Input
          type="text"
          inputMode="numeric"
          name="segundo input"
          value={segundoValor}
          placeholder="Digite o segundo número"
          onChange={capturandoSegundoValor}
          autoComplete="off"
        />
      </S.ConteinerInput>
      <S.ConteinerButton>
        <S.Button onClick={handleClear}>C</S.Button>
        <S.Button onClick={soma}>+</S.Button>
        <S.Button onClick={subtracao}>-</S.Button>
        <S.Button onClick={multiplicacao}>x</S.Button>
        <S.Button onClick={divisao}>/</S.Button>
        <S.Button onClick={porcentagem}>%</S.Button>
      </S.ConteinerButton>
      <S.Resultado>{resultado}</S.Resultado>
    </S.Main>
  );
}
