function gerarRecibo () {
    eminente = document.getElementById('print_eminente');
    pagador = document.getElementById('print_pagador');
    valor = document.getElementById('print_valor');
    data = document.getElementById('print_data');

    eminente.innerHTML = 'Eminente do Recibo - ' + document.getElementById('emitente').value;
    pagador.innerHTML = document.getElementById('pagante').value;
    valor.innerHTML = document.getElementById('valor').value;
    data.innerHTML = newData();
    window.print();
}

function newData () {
    const data = new Date();

    const dataFormatada = data.toLocaleDateString(
        'pt-br',
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        
        return dataFormatada;
}