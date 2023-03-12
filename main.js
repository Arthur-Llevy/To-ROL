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
    fieldset.setAttribute('class', `classes`)
    legend.innerHTML = `Dados - Classe ${classNumber}`;
    firstP.innerHTML = `Nome da classe`;
    secondP.innerHTML = 'De';
    firstInput.setAttribute('id', 'class-name');
    firstInput.setAttribute('class', 'class-names');
    thirdP.innerHTML = 'Até';
    secondInput.setAttribute('id', 'to');
    secondInput.setAttribute('type', 'number');
    secondInput.setAttribute('class', 'froms');
    thirdInput.setAttribute('id', 'to');
    thirdInput.setAttribute('type', 'number');
    thirdInput.setAttribute('class', 'tos');

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
let classValues = [];

function absoluteFrequence(){

    let statisticsFirstTr = document.createElement('tr');
    let statisticsFirstTh = document.createElement('th');
    let statisticsSecondtTh = document.createElement('th');
    let statisticsThirdTh = document.createElement('th');
    let statisticsFourTh = document.createElement('th');
    let classes = document.querySelectorAll('.classes');
    let classesNames = document.querySelectorAll('.class-names');
    let table = document.getElementById('table-datas');
    let tableStatistics = document.getElementById('table-datas-statistics');

    let classesTos = document.querySelectorAll('.tos');
    let classesFroms = document.querySelectorAll('.froms');

    statisticsFirstTh.innerHTML = 'Classes';
    statisticsSecondtTh.innerHTML = 'F. absoluta';
    statisticsThirdTh.innerHTML = 'F. relativa';
    statisticsFourTh.innerHTML = '%';

    statisticsFirstTr.appendChild(statisticsFirstTh);
    statisticsFirstTr.appendChild(statisticsSecondtTh);
    statisticsFirstTr.appendChild(statisticsThirdTh);
    statisticsFirstTr.appendChild(statisticsFourTh);
    tableStatistics.appendChild(statisticsFirstTr)


    for(let i = 0; i < classNumber; i++){

        for(let j = 0; j <= list.length; j++){

            list[j] >= parseInt(classesFroms[i].value) ? 
                list[j] < parseInt(classesTos[i].value) ?
                    classValues.push(list[j]) : console.log("not added")  
            : console.log("not added") 

        };

        console.log(`Fa Classe ${classNumber}: ${classValues}`)
        console.log(`Fr Classe ${classNumber}: ${classValues.length / list.length}`)
        console.log(`% Classe ${classNumber}: ${(classValues.length / list.length) * 100}`)

        let statisticsTr = document.createElement('tr');
        let classThName = document.createElement('th');
        let classThFa = document.createElement('th');
        let classThFe = document.createElement('th');
        let classThPercentage = document.createElement('th');

        classThName.innerHTML = classesNames[i]?.value
        classThFa.innerHTML = classValues.length;
        classThFe.innerHTML = (classValues.length / list.length).toFixed(2);
        classThPercentage.innerHTML = ((classValues.length / list.length) * 100).toFixed(2);
        statisticsTr.appendChild(classThName);
        statisticsTr.appendChild(classThFa);
        statisticsTr.appendChild(classThFe);
        statisticsTr.appendChild(classThPercentage);
        tableStatistics.appendChild(statisticsTr);        

        classValues = [];

    }; 

    let totalTr = document.createElement('tr');
    let total = document.createElement('td');
    let totalFa = document.createElement('td');
    let totalFr = document.createElement('td');
    let totalPercentage = document.createElement('td');
    let tableMinMaxFirstTr = document.createElement('tr');
    let tableMinMaxSecondTr = document.createElement('tr');
    let tableMinMaxFirstTh = document.createElement('th');
    let tableMinMaxSecondTh = document.createElement('th');
    let tableMinMaxThirdTh = document.createElement('th');
    let tableMinMaxFourTh = document.createElement('th');
    let tableMinMaxFiveTh = document.createElement('th');
    let tableMinMaxSixTh = document.createElement('th');
    let tableMinMax = document.getElementById('minMax');
    
    tableMinMaxFirstTh.innerHTML = 'V. máx';
    tableMinMaxSecondTh.innerHTML = 'V. min';
    tableMinMaxThirdTh.innerHTML = 'Amplitude total';
    tableMinMaxFourTh.innerHTML = Math.max(...list);
    tableMinMaxFiveTh.innerHTML = Math.min(...list);
    tableMinMaxSixTh.innerHTML = Math.max(...list) - Math.min(...list);

    tableMinMaxFirstTr.appendChild(tableMinMaxFirstTh);
    tableMinMaxFirstTr.appendChild(tableMinMaxSecondTh);
    tableMinMaxFirstTr.appendChild(tableMinMaxThirdTh);

    tableMinMax.appendChild(tableMinMaxFirstTr);

    tableMinMaxSecondTr.appendChild(tableMinMaxFourTh);
    tableMinMaxSecondTr.appendChild(tableMinMaxFiveTh);
    tableMinMaxSecondTr.appendChild(tableMinMaxSixTh);

    tableMinMax.appendChild(tableMinMaxSecondTr);    


    tableMinMax.style.visibility = 'initial';
    total.innerHTML = 'Total';
    totalFa.innerHTML = `n = ${list.length}`;
    totalFr.innerHTML = `1,00`;
    totalPercentage.innerHTML = `100%`;

    totalTr.appendChild(total);
    totalTr.appendChild(totalFa);
    totalTr.appendChild(totalFr);
    totalTr.appendChild(totalPercentage);        
    tableStatistics.appendChild(totalTr);

};

orderItems.addEventListener('click', () => {         

    list.sort((a, b) => a - b);
    
    let table = document.getElementById('table-datas');
    let tableStatistics = document.getElementById('table-datas-statistics');
    table.style.visibility = 'initial';
    tableStatistics.style.visibility = 'initial';
    

    let tableStatisticsFirstLine = document.createElement('tr');
    let tableStatisticsClassName = document.createElement('th');
    let tableStatisticsFa = document.createElement('th');
    let tableStatisticsPercent = document.createElement('th');

    let tableStatisticsFe = document.createElement('th');
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


});

let resetButton = document.getElementById('toReset');

resetButton.addEventListener('click', () => {

    list = [];

    let table = document.getElementById('table-datas');
    let tableStatistics = document.getElementById('table-datas-statistics')
    table.style.visibility = 'hidden';
    tableStatistics.style.visibility = 'hidden';

    while (table.firstChild) { 
        table.removeChild(table.firstChild); 
    };

    while (tableStatistics.firstChild) { 
        tableStatistics.removeChild(tableStatistics.firstChild); 
    };
 

});

function help(){

    window.alert('Olá! Para usar o To ROL você precisa digitar números no campo acima, após digitar um número aperte em "adicionar a lista", quando tiver colocado todos os números, basta clicar no botão "ordernar."')

};

