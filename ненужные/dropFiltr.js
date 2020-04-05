let wrap = document.querySelector('.list');    // масс листа
let list = document.querySelectorAll('div.list span');    // масс листа
let listI = document.querySelector('div.list span').innerText;    // первый из листа
// 
let changed = document.querySelector('.added-word');    // выбронный эл
changed.innerText = listI                               // по умолчанию вписывается первый эл. из списка
// 
let сontainer = document.querySelector('.list-container');  // контейнер со списком
let open = document.querySelector('.main-list-wrap');   // открывающий контейнер
сontainer.style.display = 'none'
// 
let input = document.querySelector('.enter');           // инпут
let inputMas = [];
// //
let ul = document.createElement('ul');                  // создал список
let li = document.createElement('li');
wrap.appendChild(ul);
// 
// 
let listArr = new Array;
for (i = 0; i < list.length; i++) {                                   // Начало Основного цикла
                       
    listArr[i] = list[i].innerText ;
        ul.innerHTML += `<li class='click'>${listArr[i]} </li>`  // Добавляю в список HTML ПО УМОЛЧАНИЮ
    let nn = listArr[i]
    list[i].style.display = 'none';
}
// 
let liAll = document.querySelectorAll('li');

for (i = 0; i < liAll.length; i++) {                 // перебор листа
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
    for (i = 0; i < liAll.length; i++) {                    // перебор листа
        let oneWord;
        oneWord = liAll[i].innerText;
    // ================ Слово в массив ======================================>
        let oneWordMassive = []
        for (j = 0; j < oneWord.length; j++ ){       // перебор слова в массив букв
            oneWordMassive[j] = oneWord[j];   
        }
    // ======================================================>
        let inputVal = input.value;
    //   let allLenInput = inputVal.length;      // Длина меняется у инпута в обе стороны ///////////////////////////////////////////////
        for (n = 0; n < inputVal.length; n++) {             // Начало Основного цикла
            inputMas[n] = inputVal[n];                      // Массив из инпута
        }
        // ======================================================>
        for (m = 0; m < input.value.length; m++) {                 // цикл сравнивание с Массивом слова списка
            if (input.value[m] != oneWordMassive[m]){
                // resourchedWord[m] = oneWordMassive.indexOf(inputMas[m]);         // Массив нахождения совпадений из листа
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

for (i = 0; i < list.length; i++) {                 // запись выбора из списка
    let s = list[i];
    list[i].onclick = () => {
        changed.innerText = s.innerText
    }
}


