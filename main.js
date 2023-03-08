let addItem = document.getElementById('addItem');
let list = [];

addItem.addEventListener('click', () => {

    let numberInput = document.getElementById('number');

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

            h2.innerHTML = 'A ordem dos números digitados é'
            li.innerHTML = list[i];
            ul.appendChild(li);
            li.setAttribute('id',  i)
            
        }

    };

    list = []

});

