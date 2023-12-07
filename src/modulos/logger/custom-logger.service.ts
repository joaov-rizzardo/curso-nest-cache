import { ConsoleLogger, Injectable } from '@nestjs/common';
import { appendFileSync } from 'fs';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  formataLog(nome, quantidade, valor) {
    return `LOCAL: ${
      this.context
    } - NOME: ${nome} - QUANTIDADE: ${quantidade} - PREÇO: ${valor} - TIMESTAMP ${this.getTimestamp()}`;
  }

  logEmArquivo(produto) {
    const { nome, quantidadeDisponivel, valor } = produto;
    const mensagemFormatada =
      this.formataLog(nome, quantidadeDisponivel, valor) + '\n'; //adicionei a quebra de linha pois o appendFileSync não faz isso automaticamente
    const caminhoDoLog = './src/modulos/logger/arquivo.log';
    appendFileSync(caminhoDoLog, mensagemFormatada);
  }
}
