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
// //
input.onclick = () => { event.stopPropagation()}       // блок на событие
input.onkeyup = () => {                                // содержание ввода
    console.log(input.value)

}

open.onclick = function openBlock() {
    if (сontainer.style.display === 'none') {
        сontainer.style.display = 'block';
    } else {
        сontainer.style.display = 'none'; 
        input.value = '';

    }
}

for (i = 0; i < list.length; i++) {
    let s = list[i];
    list[i].onclick = () => {
        changed.innerText = s.innerText
    }
}


