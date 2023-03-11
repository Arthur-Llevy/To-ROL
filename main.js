let container = document.getElementById('container');
let addItem = document.getElementById('addItem');
let createClass = document.getElementById('createClass');
let removeClass = document.getElementById('removeClass');
let list = [];
let classNumber = 1;

createClass.addEventListener('click', () => {

    classNumber += 1;

    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    let firstP = document.createElement('p');
    let secondP = document.createElement('p');
    let thirdP = document.createElement('p');
    let firstInput = document.createElement('input');
    let secondInput = document.createElement('input');
    let thirdInput = document.createElement('input');
    
    fieldset.setAttribute('id', `class${classNumber}`)
    legend.innerHTML = `Dados - Classe ${classNumber}`;
    firstP.innerHTML = `Nome da classe`;
    secondP.innerHTML = 'De';
    firstInput.setAttribute('id', 'class-name');
    thirdP.innerHTML = 'Até';
    secondInput.setAttribute('id', 'to');
    secondInput.setAttribute('type', 'number');
    thirdInput.setAttribute('id', 'to');
    thirdInput.setAttribute('type', 'number');

    fieldset.appendChild(legend);
    fieldset.appendChild(firstP);
    fieldset.appendChild(firstInput);
    fieldset.appendChild(secondP);
    fieldset.appendChild(secondInput);
    fieldset.appendChild(thirdP);
    fieldset.appendChild(thirdInput);
    container.insertBefore(fieldset, container.children[classNumber + 1]);    
    
});

removeClass.addEventListener('click', () => {

    let message = 'Não é possível ter menos de uma classe!';
    let currentFildset = document.getElementById(`class${classNumber}`)

    classNumber <= 1 ? window.alert(message) :              
        container.removeChild(currentFildset);

        classNumber === 1 ? classNumber = 1 : classNumber -= 1;

});


addItem.addEventListener('click', () => {

    let numberInput = document.getElementById('values');
    let inputs = document.getElementsByTagName('input');

    for (let i = 0; i <= inputs.length; i++){

        if(inputs[i].value == ''){

            window.alert('Ainda há campos a serem preenchidos.');
            break;

        }else {
            
            list.push(numberInput.value);
            numberInput.value = '';
            break;

        };

    };

});

let orderItems = document.getElementById('toOrder');

orderItems.addEventListener('click', () => {   

    list.sort((a, b) => a - b);
    
    let table = document.getElementById('table-datas');
    table.style.visibility = 'initial';

    let tableFirstLine = document.createElement('tr');
    let tableOrderLine = document.createElement('th');
    let tableValueLine = document.createElement('th');

    tableOrderLine.innerHTML = 'Ordem';
    tableValueLine.innerHTML = 'Valores';
    tableFirstLine.appendChild(tableOrderLine);
    tableFirstLine.appendChild(tableValueLine);
    table.appendChild(tableFirstLine);

    for(let i = 0; i < list.length; i++){
                
        if(i <= list.length){
            
            let tableValue = document.createElement('td');
            let tableLine = document.createElement('tr');
            let tableOrder = document.createElement('td');

            tableOrder.innerHTML = `${i + 1}°`;
            tableValue.innerHTML = list[i];           
            tableLine.appendChild(tableOrder);
            tableLine.appendChild(tableValue);
            table.appendChild(tableLine);           
                   
        };

    };

    list = [];    

});

let resetButton = document.getElementById('toReset');

resetButton.addEventListener('click', () => {

    let table = document.getElementById('table-datas');
    table.style.visibility = 'hidden';

    while (table.firstChild) { 
        table.removeChild(table.firstChild); 
    };

});

function help(){

    window.alert('Olá! Para usar o To ROL você precisa digitar números no campo acima, após digitar um número aperte em "adicionar a lista", quando tiver colocado todos os números, basta clicar no botão "ordernar."')

};

