        // Queremos um número inicial
        // Queremos um sinal (tipo de operação)
        // Queremos um número final
        // Queremos um resultado final

        var numero1 = prompt('Informe o primeiro número');

        var operacao = prompt('Insira um sinal de operação (+ ou - ou * ou /)');

        while(operacao != '+' && operacao != '-' && operacao != '*' && operacao != '/'){
            alert('Por favor, insira um sinal válido para a operação.');

            operacao = prompt('Insira um sinal de operação (+ ou - ou * ou /)');
        }

        var numero2 = prompt('Insira o segundo número');

        // Função para converter uma string em número.
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        var resultadoFinal = 0;
        
        if(operacao == '+'){
            resultadoFinal = numero1 + numero2;
        }else if(operacao == '-'){
            resultadoFinal = numero1 - numero2;
        }else if(operacao == '*'){
            resultadoFinal = numero1 * numero2;
        }else if(operacao == '/'){
            resultadoFinal = numero1 / numero2;
        }

        alert('O resultado do cálculo é igual a '+ resultadoFinal);