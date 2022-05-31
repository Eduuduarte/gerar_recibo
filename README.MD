# receipt generator

<h4 align="center">
✏️ Readme it is in development...✏️
</h4>

<p>

* [About](#About)
* [TheProject](#the-project)

</p>

### About
<p>This project is a receipt generator through window.print with javascript.</p>

### The Project

#### Set up receipt
~~~javascript
//take it element html
    let eminente = document.getElementById('print_eminente');
    let pagador = document.getElementById('print_pagador');
    let valor = document.getElementById('print_valor');
    let data = document.getElementById('print_data');

//Send value to element
    eminente.innerHTML = 'Eminente do Recibo - ' + document.getElementById('emitente').value;
    pagador.innerHTML = document.getElementById('pagante').value;
    valor.innerHTML = document.getElementById('valor').value;
    data.innerHTML = newData();
~~~

#### Set up date
~~~javascript
    const data = new Date();

    const dataFormatada = data.toLocaleDateString(
        'pt-br',
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
~~~
