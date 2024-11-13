import { useState } from "react";
import * as S from "./style";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [segundoValor, setSegundoValor] = useState("");
  const [resultado, setResultado] = useState("");

  //TODO:
  //[]melhorar as verificações

  //função genérica para capturar, converter em número
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

  //função genérica que valida as entradas para então realizar as operações
  const validarEntradas = () => {
    return (
      primeiroValor !== "" &&
      segundoValor !== "" &&
      !isNaN(primeiroValor) &&
      !isNaN(segundoValor)
    );
  };

  //funções que validam os valores, realizam as operações aritméticas e depois convertem os resultados para strings
  const soma = () => {
    if (validarEntradas()) {
      const resultadoSoma = Number(primeiroValor) + Number(segundoValor);
      setResultado(String(resultadoSoma));
    }
  };

  const subtracao = () => {
    if (validarEntradas()) {
      const resultadoSubtracao = Number(primeiroValor) - Number(segundoValor);
      setResultado(String(resultadoSubtracao));
    }
  };

  const multiplicacao = () => {
    if (validarEntradas()) {
      const resultadoMultiplicacao =
        Number(primeiroValor) * Number(segundoValor);
      setResultado(String(resultadoMultiplicacao));
    }
  };

  //verficação do segundo valor, caso contrário qualquer número dividido por 0 dá como resultado Infinity
  const divisao = () => {
    if (segundoValor === 0) {
      alert("Não é possível dividir por 0.");
      handleClear();
    } else {
      if (validarEntradas()) {
        const resultadoDivisao = Number(primeiroValor) / Number(segundoValor);
        setResultado(String(resultadoDivisao));
      }
    }
  };

  //função adicional para realizar a operação de porcentagem
  const porcentagem = () => {
    if (validarEntradas()) {
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
          id="primeiroInput"
          value={primeiroValor}
          placeholder="Digite o primeiro número"
          onChange={capturandoPrimeiroValor}
          autoFocus
        />
        <S.Input
          type="text"
          inputMode="numeric"
          id="segundoInput"
          value={segundoValor}
          placeholder="Digite o segundo número"
          onChange={capturandoSegundoValor}
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
      <S.Resultado htmlFor="primeiroInput segundoInput">
        {resultado}
      </S.Resultado>
    </S.Main>
  );
}
