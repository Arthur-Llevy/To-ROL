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
    let firstHr = document.createElement('hr');
    let secondHr = document.createElement('hr');
    let firstP = document.createElement('p');
    let secondP = document.createElement('p');
    let thirdP = document.createElement('p');
    let firstInput = document.createElement('input');
    let secondInput = document.createElement('input');
    
    fieldset.setAttribute('id', `class${classNumber}`)
    legend.innerHTML = `Dados - Classe ${classNumber}`;
    firstHr.setAttribute('class', 'hrs');
    firstHr.setAttribute('id', 'hrs');
    secondHr.setAttribute('class', 'hrs');
    secondHr.setAttribute('id', 'hrs');
    firstP.innerHTML = `Classe ${classNumber}`;
    secondP.innerHTML = 'De';
    firstInput.setAttribute('id', 'from');
    firstInput.setAttribute('type', 'number');
    thirdP.innerHTML = 'Até';
    secondInput.setAttribute('id', 'to');
    secondInput.setAttribute('type', 'number');

    fieldset.appendChild(legend);
    fieldset.appendChild(firstHr);
    fieldset.appendChild(firstP);
    fieldset.appendChild(secondHr);
    fieldset.appendChild(secondP);
    fieldset.appendChild(firstInput);
    fieldset.appendChild(thirdP);
    fieldset.appendChild(secondInput);
    container.insertBefore(fieldset, container.children[classNumber + 1]);    

    removeClass.addEventListener('click', () => {
    
        let field = document.getElementById(`class${classNumber}`)
        container.removeChild(field);
        classNumber -= 1;
    
    });
    
});


addItem.addEventListener('click', () => {

    let numberInput = document.getElementById('values');
    list.push(numberInput.value);
    numberInput.value = '';

});

let orderItems = document.getElementById('toOrder');

orderItems.addEventListener('click', () => {   

    list.sort((a, b) => a - b);
    
    let ul = document.getElementById('list');

    for(let i = 0; i < list.length; i++){

        let li = document.createElement('li');

        li.innerHTML = list[i];
                
        if(i <= list.length){
            
            let li = document.createElement('li');
            let h2 = document.getElementById('h2');
            let maxMinResult = document.getElementById('maxMin');

            h2.innerHTML = 'A ordem dos números digitados é';
            li.innerHTML = list[i];
            ul.appendChild(li);
            li.setAttribute('id',  i);
            maxMinResult.innerHTML = `Os valores máximos e mínimos são, respectivamente, ${Math.max(...list)} e ${Math.min(...list)}`;
                   
        };

    };

    list = [];    

});

let resetButton = document.getElementById('toReset');

resetButton.addEventListener('click', () => {

    let ul = document.getElementById('list');

    while (ul.firstChild) { 
        ul.removeChild(ul.firstChild); 
    };

    let h2 = document.getElementById('h2');
    let maxMinResult = document.getElementById('maxMin');

    maxMinResult.innerHTML = '';
    h2.innerHTML = '';

});

function help(){

    window.alert('Olá! Para usar o To ROL você precisa digitar números no campo acima, após digitar um número aperte em "adicionar a lista", quando tiver colocado todos os números, basta clicar no botão "ordernar."')

};
