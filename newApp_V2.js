var wrap = document.querySelector('.list'); // масс листа
var list = document.querySelectorAll('div.list span'); // масс листа
var listI = document.querySelector('div.list span'); // первый из листа
// 
var changed = document.querySelector('.added-word'); // выбронный эл
changed.innerText = listI.innerText; // по умолчанию вписывается первый эл. из списка
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
    //    let nn = listArr[i]
    list[i].style.display = 'none';
}
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
    // ======================================================================================================================
    // ================ Перебор листа ======================================>
    for (var i = 0; i < liAll.length; i++) { // перебор листа
        var oneWord = void 0;
        oneWord = liAll[i].innerText;
        // ======================================================> ОСНОВНАЯ ФУНКЦИЯ ======================================================>
        if (oneWord.indexOf(input.value) === -1) { // Условие на проверку совпадений строк
            // ul.append(liAll[i]);
            liAll[i].style.display = 'none';
        }
        else if (liAll[i].style.display === 'none') { // Возврат скрытых строк в список
            liAll[i].style.display = 'block';
        }
        if ('' === input.value) {
            liAll[i].style.display = 'block';
        }
        // console.log( oneWord + ':' + input.value  + '=' + oneWord.indexOf(input.value) );
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
        for (var i = 0; i < liAll.length; i++) { // перебор листа
            if ('' === input.value) {
                liAll[i].style.display = 'block';
            }
        }
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
