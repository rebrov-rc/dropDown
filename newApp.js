// 
var wrap = document.querySelector('.list'); // масс листа
var list = document.querySelectorAll('div.list span'); // масс листа
var listI = document.querySelector('div.list span'); // первый из листа
listI.innerText;
// 
var changed = document.querySelector('.added-word'); // выбронный эл
//changed.innerText = listI;                            // по умолчанию вписывается первый эл. из списка
// 
var сontainer = document.querySelector('.list-container'); // контейнер со списком
var open = document.querySelector('.main-list-wrap'); // открывающий контейнер
сontainer.style.display = 'none';
// 
var input = document.querySelector('.enter'); // инпут
var inputMas = [];
// //
var ul = document.createElement('ul'); // создал список
var li = document.createElement('li');
wrap.appendChild(ul);
// 
// 
var listArr = new Array;
for (var i = 0; i < list.length; i++) { // Начало Основного цикла
    listArr[i] = list[i].innerText;
    ul.innerHTML += "<li class='click'>" + listArr[i] + " </li>"; // Добавляю в список HTML ПО УМОЛЧАНИЮ
    var nn = listArr[i];
    list[i].style.display = 'none';
}
changed.innerText = listArr[0]; // по умолчанию вписывается первый эл. из списка
// 
var liAll = document.querySelectorAll('li');
var _loop_1 = function (i) {
    var s = liAll[i];
    liAll[i].style.cursor = 'pointer';
    liAll[i].onclick = function () {
        changed.innerText = s.innerText;
    };
};
for (var i = 0; i < liAll.length; i++) {
    _loop_1(i);
}
// 
// 
input.onclick = function () { event.stopPropagation(); }; // блок на событие
input.onkeyup = function () {
    console.log(input.value);
    // ======================================================================================================================
    // ================ Перебор листа ======================================>
    for (var i = 0; i < liAll.length; i++) { // перебор листа
        var oneWord = void 0;
        oneWord = liAll[i].innerText;
        // ================ Слово в массив ======================================>
        var oneWordMassive = [];
        for (var j = 0; j < oneWord.length; j++) { // перебор слова в массив букв
            oneWordMassive[j] = oneWord[j];
        }
        // ======================================================>
        var inputVal = input.value;
        var allLenInput = inputVal.length; // Длина меняется у инпута в обе стороны ///////////////////////////////////////////////
        for (var n = 0; n < inputVal.length; n++) { // Начало Основного цикла
            inputMas[n] = inputVal[n]; // Массив из инпута
        }
        // ======================================================>
        var resourchedWord = []; //МАССИВ С ЧИСЛАМИ ИМЕЕТ ДЛИНУ
        for (var m = 0; m < oneWordMassive.length; m++) { // цикл сравнивание с Массивом слова списка
            if (oneWordMassive.indexOf(inputMas[m]) != -1) {
                resourchedWord[m] = oneWordMassive.indexOf(inputMas[m]); // Массив нахождения совпадений из листа
                // получили массив совподений индексов                   
            } // else {}
        }
        var allLenResourched = resourchedWord.length;
        if (allLenResourched === allLenInput) { // Сравнение и Отбор
            console.log(oneWord);
        }
        else {
            liAll[i].remove();
        }
        console.log(allLenInput);
    }
    // =========================================================================================================================
};
open.onclick = function openBlock() {
    if (сontainer.style.display === 'none') {
        сontainer.style.display = 'block';
        input.focus();
    }
    else {
        сontainer.style.display = 'none';
        input.value = '';
    }
};
var _loop_2 = function (i) {
    var s = list[i];
    list[i].onclick = function () {
        changed.innerText = s.innerText;
    };
};
for (var i = 0; i < list.length; i++) {
    _loop_2(i);
}
