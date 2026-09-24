const CalculadoraCientifica = {

  somar(a, b) {
    return a + b;
  },

  subtrair(a, b) {
    return a - b;
  },

  multiplicar(a, b) {
    return a * b;
  },

  dividir(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  },

  potencia(base, expoente) {
    return Math.pow(base, expoente);
  },

  raizQuadrada(a) {
    if (a < 0) {
      throw new Error("Não é possível calcular raiz quadrada de número negativo.");
    }
    return Math.sqrt(a);
  },

  fatorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error("Fatorial requer um número inteiro não negativo.");
    }
    return n <= 1 ? 1 : n * this.fatorial(n - 1);
  },

  seno(graus) {
    return Math.sin(this._paraRadianos(graus));
  },

  cosseno(graus) {
    return Math.cos(this._paraRadianos(graus));
  },

  tangente(graus) {
    return Math.tan(this._paraRadianos(graus));
  },

  logaritmo(a, base = 10) {
    if (a <= 0) {
      throw new Error("Logaritmo requer um número maior que zero.");
    }
    return Math.log(a) / Math.log(base);
  },

  logaritmoNatural(a) {
    if (a <= 0) {
      throw new Error("Logaritmo natural requer um número maior que zero.");
    }
    return Math.log(a);
  },

  porcentagem(valor, percentual) {
    return (valor * percentual) / 100;
  },

  _paraRadianos(graus) {
    return (graus * Math.PI) / 180;
  },
};
