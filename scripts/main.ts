let container = document.getElementById('container') as HTMLDivElement;
let addItem = document.getElementById('addItem') as HTMLButtonElement;
let createClass = document.getElementById('createClass') as HTMLButtonElement;
let removeClass = document.getElementById('removeClass') as HTMLButtonElement;
let list: number[] = [];
let classNumber: number = 1;

createClass.addEventListener('click', (): void => {

    classNumber += 1;

    let fieldset: HTMLFieldSetElement = document.createElement('fieldset');
    let legend: HTMLLegendElement = document.createElement('legend');
    let firstP: HTMLParagraphElement = document.createElement('p');
    let secondP: HTMLParagraphElement = document.createElement('p');
    let thirdP: HTMLParagraphElement = document.createElement('p');
    let firstInput: HTMLInputElement = document.createElement('input');
    let secondInput: HTMLInputElement = document.createElement('input');
    let thirdInput: HTMLInputElement = document.createElement('input');
    
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

    let message: string = 'Não é possível ter menos de uma classe!';
    let currentFildset = document.getElementById(`class${classNumber.toString()}`) as HTMLFieldSetElement;

    classNumber <= 1 ? window.alert(message) :              
        container.removeChild(currentFildset);

        classNumber === 1 ? classNumber = 1 : classNumber -= 1;

});


addItem.addEventListener('click', () => {

    let numberInput = document.getElementById('values') as HTMLInputElement;
    let inputs = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;

    for (let i: number = 0; i <= inputs.length; i++){

        if(inputs[i].value == ''){

            window.alert('Ainda há campos a serem preenchidos.');
            break;

        }else {
            
            list.push(parseInt(numberInput.value));
            numberInput.value = '';
            break;

        };

    };

});

let orderItems = document.getElementById('toOrder') as HTMLButtonElement;
let classValues: number[] = [];

function absoluteFrequence(): void{

    let statisticsFirstTr: HTMLTableRowElement = document.createElement('tr');
    let statisticsFirstTh: HTMLTableHeaderCellElement = document.createElement('th');
    let statisticsSecondtTh: HTMLTableHeaderCellElement = document.createElement('th');
    let statisticsThirdTh: HTMLTableHeaderCellElement = document.createElement('th');
    let statisticsFourTh: HTMLTableHeaderCellElement = document.createElement('th');
    let classes = document.querySelectorAll('.classes') as NodeListOf<HTMLFieldSetElement>;
    let classesNames = document.querySelectorAll('.class-names') as NodeListOf<HTMLInputElement>;
    let table = document.getElementById('table-datas') as HTMLTableElement;
    let tableStatistics = document.getElementById('table-datas-statistics') as HTMLTableElement;

    let classesTos = document.querySelectorAll('.tos') as NodeListOf<HTMLInputElement>;
    let classesFroms = document.querySelectorAll('.froms') as NodeListOf<HTMLInputElement>;

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

        let statisticsTr: HTMLTableRowElement = document.createElement('tr');
        let classThName: HTMLTableHeaderCellElement = document.createElement('th');
        let classThFa: HTMLTableHeaderCellElement = document.createElement('th');
        let classThFe: HTMLTableHeaderCellElement = document.createElement('th');
        let classThPercentage: HTMLTableHeaderCellElement = document.createElement('th');

        classThName.innerHTML = classesNames[i]?.value
        classThFa.innerHTML = (classValues.length).toString();
        classThFe.innerHTML = (classValues.length / list.length).toFixed(2);
        classThPercentage.innerHTML = ((classValues.length / list.length) * 100).toFixed(2);
        statisticsTr.appendChild(classThName);
        statisticsTr.appendChild(classThFa);
        statisticsTr.appendChild(classThFe);
        statisticsTr.appendChild(classThPercentage);
        tableStatistics.appendChild(statisticsTr);        

        classValues = [];

    }; 

    let totalTr: HTMLTableRowElement = document.createElement('tr');
    let total: HTMLTableCellElement = document.createElement('td');
    let totalFa: HTMLTableCellElement = document.createElement('td');
    let totalFr: HTMLTableCellElement = document.createElement('td');
    let totalPercentage: HTMLTableCellElement = document.createElement('td');
    let tableMinMaxFirstTr: HTMLTableRowElement = document.createElement('tr');
    let tableMinMaxSecondTr: HTMLTableRowElement = document.createElement('tr');
    let tableMinMaxFirstTh: HTMLTableHeaderCellElement = document.createElement('th');
    let tableMinMaxSecondTh: HTMLTableHeaderCellElement = document.createElement('th');
    let tableMinMaxThirdTh: HTMLTableHeaderCellElement = document.createElement('th');
    let tableMinMaxFourTh: HTMLTableHeaderCellElement = document.createElement('th');
    let tableMinMaxFiveTh: HTMLTableHeaderCellElement = document.createElement('th');
    let tableMinMaxSixTh: HTMLTableHeaderCellElement = document.createElement('th');
    let tableMinMax = document.getElementById('minMax') as HTMLTableElement;
    
    tableMinMaxFirstTh.innerHTML = 'V. máx';
    tableMinMaxSecondTh.innerHTML = 'V. min';
    tableMinMaxThirdTh.innerHTML = 'Amplitude total';
    tableMinMaxFourTh.innerHTML = (Math.max(...list)).toString();
    tableMinMaxFiveTh.innerHTML = (Math.min(...list)).toString(0);
    tableMinMaxSixTh.innerHTML = (Math.max(...list) - Math.min(...list)).toString();

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
    
    let table = document.getElementById('table-datas') as HTMLTableElement;
    let tableStatistics = document.getElementById('table-datas-statistics') as HTMLTableElement;
    table.style.visibility = 'initial';
    tableStatistics.style.visibility = 'initial';
    

    let tableStatisticsFirstLine: HTMLTableRowElement = document.createElement('tr');
    let tableStatisticsClassName: HTMLTableHeaderCellElement = document.createElement('th');
    let tableStatisticsFa: HTMLTableHeaderCellElement = document.createElement('th');
    let tableStatisticsPercent: HTMLTableHeaderCellElement = document.createElement('th');

    let tableStatisticsFe: HTMLTableHeaderCellElement = document.createElement('th');
    let tableFirstLine: HTMLTableRowElement = document.createElement('tr');
    let tableOrderLine: HTMLTableHeaderCellElement = document.createElement('th');
    let tableValueLine: HTMLTableHeaderCellElement = document.createElement('th'); 

    tableOrderLine.innerHTML = 'Ordem';
    tableValueLine.innerHTML = 'Valores';
    tableFirstLine.appendChild(tableOrderLine);
    tableFirstLine.appendChild(tableValueLine);
    table.appendChild(tableFirstLine);

    for(let i: number = 0; i < list.length; i++){
                
        if(i <= list.length){
            
            let tableValue: HTMLTableCellElement = document.createElement('td');
            let tableLine: HTMLTableRowElement = document.createElement('tr');
            let tableOrder: HTMLTableHeaderCellElement = document.createElement('td');

            tableOrder.innerHTML = `${i + 1}°`;
            tableValue.innerHTML = list[i].toString();           
            tableLine.appendChild(tableOrder);
            tableLine.appendChild(tableValue);
            table.appendChild(tableLine);           
                   
        };

    };


});

let resetButton = document.getElementById('toReset') as HTMLButtonElement;

resetButton.addEventListener('click', (): void => {

    list = [];

    let table = document.getElementById('table-datas') as HTMLTableElement;
    let tableStatistics = document.getElementById('table-datas-statistics') as HTMLTableElement; 
    let tableMinMax = document.getElementById('minMax') as HTMLTableElement; 
    table.style.visibility = 'hidden';
    tableStatistics.style.visibility = 'hidden';
    tableMinMax.style.visibility = 'hidden';

    while (table.firstChild) { 
        table.removeChild(table.firstChild); 
    };

    while (tableStatistics.firstChild) { 
        tableStatistics.removeChild(tableStatistics.firstChild); 
    };
 
    while (tableMinMax.firstChild) { 
        tableMinMax.removeChild(tableMinMax.firstChild); 
    };
 

});

function help(){

    let message: string = "Olá! Para usar o To ROL você precisa digitar números no campo acima, que servem como dados, após digitar um número aperte em 'adicionar a lista', quando tiver colocado todos os números, crie classes, elas servem como 'categorias' que separam seus dados, elas possuem campos para o nome, seu valor mínimo e o máximo, após isso clique em ordenar para obter os resultados. "

    window.alert(message);

};

