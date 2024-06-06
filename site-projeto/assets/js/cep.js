document.getElementById('cep').addEventListener('input', function() {
    let value = this.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos

    if (value.length > 5) {
        value = value.slice(0, 5) + '-' + value.slice(5, 8); // Adiciona o hífen após o quinto dígito
    }

    this.value = value; // Atualiza o valor do input
});

function calcularFrete() {
    var cepInput = document.getElementById('cep').value;

    // Verifica se o CEP tem 9 caracteres (8 números + 1 hífen)
    if (cepInput.length !== 9) {
        var freteInfo = document.getElementById('frete-info');
        freteInfo.innerHTML = '<p class="error">Por favor, insira um CEP completo com 8 dígitos.</p>';
        return;
    }

    var cepNumber = parseInt(cepInput.replace('-', ''), 10);
    var frete = 0;
    var estado = '';
    var mensagemEntrega = '';

    // Função para verificar se o CEP está dentro de uma faixa
    function isCepInRange(cep, start, end) {
        return cep >= parseInt(start.replace('-', ''), 10) && cep <= parseInt(end.replace('-', ''), 10);
    }

    // Verifica a região com base nas faixas de CEP
    if (isCepInRange(cepNumber, '01000000', '05999999') || isCepInRange(cepNumber, '08000000', '08499999')) {
        frete = 5.99;
        estado = 'São Paulo (SP)';
        mensagemEntrega = 'Entrega em até 4 dias para São Paulo';
    } else if (isCepInRange(cepNumber, '06000000', '09999999')) {
        frete = 8.99;
        estado = 'SP Área Metropolitana';
        mensagemEntrega = 'Entrega em até 5 dias para SP Área Metropolitana';
    } else if (isCepInRange(cepNumber, '11000000', '11999999')) {
        frete = 9.99;
        estado = 'SP Litoral';
        mensagemEntrega = 'Entrega em até 6 dias para SP Litoral';
    } else if (isCepInRange(cepNumber, '12000000', '19999999')) {
        frete = 11.99;
        estado = 'SP Interior';
        mensagemEntrega = 'Entrega em até 7 dias para SP Interior';
    }
    else if (isCepInRange(cepNumber, '20000-000', ' 23799-999')) {
        frete = 12.99;
         estado = 'Rio de Janeiro';
         mensagemEntrega = 'Entrega em até 7 dias para Rio de Janeiro';
    } else if (isCepInRange(cepNumber,'20000-000','26600-999')) {
        frete = 14.00;
        estado = 'RJ Área Metropolitana';
        mensagemEntrega = 'Entrega em até 9 dias para RJ Área Metropolitana';
    }else if (isCepInRange(cepNumber,'26601-000', '28999-999')) {
        frete = 16.00;
        estado = 'RJ Interior';
        mensagemEntrega = 'Entrega em até 10 dias para RJ Interior'
    }
    else {
        frete = 0;
        estado = 'Desconhecido';
        mensagemEntrega = 'Não foi possível calcular a entrega para este CEP';
    }

    // Exibe o valor do frete para o usuário
    var freteInfo = document.getElementById('frete-info');
    freteInfo.innerHTML = `
        <hr>
        <p>O valor do frete para o seu CEP é R$ ${frete.toFixed(2)}</p>
        <hr>
        <p>Estado: ${estado}</p>
        <hr>
        <p>${mensagemEntrega}</p>
    `;
}

