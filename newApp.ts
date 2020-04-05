type Uni =  number | string;
let wrap: HTMLElement = document.querySelector('.list');    // масс листа
let list: NodeListOf<HTMLElement> = document.querySelectorAll('div.list span');    // масс листа
let listI: HTMLElement = document.querySelector('div.list span');    // первый из листа
// 
let changed: HTMLElement = document.querySelector('.added-word');    // выбронный эл
changed.innerText = listI.innerText;                               // по умолчанию вписывается первый эл. из списка
// 
let сontainer: HTMLElement = document.querySelector('.list-container');  // контейнер со списком
let open: HTMLElement = document.querySelector('.main-list-wrap');   // открывающий контейнер
сontainer.style.display = 'none'
// 
let input: HTMLElement = document.querySelector('.enter');           // инпут
let inputMas: Uni[] = [];
// //
let ul: HTMLElement = document.createElement('ul');                  // создал список
let li: HTMLElement = document.createElement('li');
wrap.appendChild(ul);
// 
// 
let listArr = new Array;
for ( let i = 0; i < list.length; i++) {                                   // Начало Основного цикла
                       
    listArr[i] = list[i].innerText ;
        ul.innerHTML += `<li class='click'>${listArr[i]} </li>`  // Добавляю в список HTML ПО УМОЛЧАНИЮ
//    let nn = listArr[i]
    list[i].style.display = 'none';
}
// 
let liAll: NodeListOf<HTMLElement> = document.querySelectorAll('li');

for ( let i = 0; i < liAll.length; i++) {                 // перебор листа
    let s = liAll[i];
    liAll[i].style.cursor = 'pointer';
    liAll[i].onclick = () => {                      // клик для выбора из списка
        changed.innerText = s.innerText;
    }
}
// 
// 
input.onclick = () => { event.stopPropagation()}       // блок на событие
input.onkeyup = () => {                                // содержание ввода
// ======================================================================================================================


    // ================ Перебор листа ======================================>
    for ( let i = 0; i < liAll.length; i++) {                    // перебор листа
        let oneWord;
        oneWord = liAll[i].innerText;
    // ================ Слово в массив ======================================>
        let oneWordMassive = []
        for ( let j = 0; j < oneWord.length; j++ ){       // перебор слова в массив букв
            oneWordMassive[j] = oneWord[j];   
        }
    // ======================================================>
        let inputVal = input.value;
        for ( let n = 0; n < inputVal.length; n++) {            
            inputMas[n] = inputVal[n];                      // Массив из инпута
        }
        // ======================================================>
        for ( let m = 0; m < input.value.length; m++) {                 // цикл сравнивание с Массивом слова списка
            if (input.value[m] != oneWordMassive[m]){
                    // liAll[i].remove();
                    ul.append(liAll[i]);
                    liAll[i].style.display = 'none';
                    break;                                                           // получили массив совподений индексов                   
            }      
            if (liAll[i].style.display === 'none'){
                liAll[i].style.display = 'block';
            }
        }
            if ('' === input.value) {
                liAll[i].style.display = 'block';
            }

    // ======================================================>
    }


// =========================================================================================================================
}

open.onclick = function openBlock() {               // открывание окна
    if (сontainer.style.display === 'none') {
        сontainer.style.display = 'block';
        input.focus();
    } else {
        сontainer.style.display = 'none'; 
        input.value = '';

        for (let i = 0; i < liAll.length; i++) {                 // перебор листа
            if ('' === input.value) {
                liAll[i].style.display = 'block';
            }
        }
        
    }
}

for ( let i = 0; i < list.length; i++) {                 // запись выбора из списка
    let s = list[i];
    list[i].onclick = () => {
        changed.innerText = s.innerText
    }
}
