let wrap = document.querySelector('.list');    // масс листа
let list = document.querySelectorAll('div.list span');    // масс листа
let span = document.querySelectorAll('span');    // Spans
let listI = list.innerText;    // первый из листа

// document.onkeyup = function(event) {
//     console.log(event);
// }
// 
let changed = document.querySelector('.added-word');    // выбронный эл
// changed.innerText = listI                               // по умолчанию вписывается первый эл. из списка
// 
let сontainer = document.querySelector('.list-container');  // контейнер со списком
let open = document.querySelector('.main-list-wrap');   // открывающий контейнер
сontainer.style.display = 'none'
// ====================================================================================>
let input = document.querySelector('.enter');           // инпут
let inputMas = [];

// //
input.onclick = () => { event.stopPropagation()}       // блок на событие


// ====================================================================================>

сontainer.style.display = 'block'; // УДАЛИТЬ!!!!
// open.onclick = function openBlock() {                   // открыввает список + закрывает
//     if (сontainer.style.display === 'none') {
//         сontainer.style.display = 'block';
//         input.focus();
//     } else {
//         сontainer.style.display = 'none';     
//         input.value = '';

//     }
// }                                                       // ===============================

// let clc = document.querySelectorAll('')
let ul = document.createElement('ul');
let li = document.createElement('li');
wrap.appendChild(ul);

function formingList () {
    let listArr = new Array;
    for (i = 0; i < list.length; i++) {                                   // Начало Основного цикла
                        
        listArr[i] = list[i].innerText ;
        // console.log(listArr[i])
            ul.innerHTML += `<li class='click'>${listArr[i]} </li>`  // Добавляю в список HTML =======///////////////////
        let nn = listArr[i]

        listArr[i].onclick = () => {
            changed.innerText = 'nn'   // s.innerText
        }
        list[i].style.display = 'none';

    }
}
formingList();
// =============================================================================

let liAll = document.querySelectorAll('li');

for (i = 0; i < liAll.length; i++) {                 // перебор листа
    let s = liAll[i];
    liAll[i].onclick = () => {                      // клик для выбора из списка
        changed.innerText = s.innerText;
    }
}

// console.log(liAll[1])

// =======================================================================================
changed.innerText = liAll[0].innerText;                              // по умолчанию вписывается первый эл. из списка



// ===========================================================================================================>

const arrI = ['f', 'r', 'a', 'n', 'c', 'e'];
let inp = ['r', 'n', 'a'];

let backSpace = 0;

input.onkeyup = () => {                                // содержание ввода /////////////////////////////////////////////////////////////////////////


    let ttt = input.value;
    console.log(input.value.length);
    if ( event.keyCode === 8 ) {
       if (ttt.length > 0){
        backSpace += 1
        }else if (ttt.length === 0){
            backSpace ;
            console.log(backSpace + '/////////////////////////////////');
        }

    }   
    console.log(ttt.length + '//////////////////////////');
    // console.log(backSpace);



    console.log('');
// ================ Перебор листа ======================================>

    for (i = 0; i < liAll.length; i++) {                    // перебор листа ///////////////////////////////////////////////
        let oneWord;
        oneWord = liAll[i].innerText;
        
// ================ Слово в массив ======================================>
        let oneWordMassive = []
        for (j = 0; j < oneWord.length; j++ ){       // перебор слова в массив букв
            oneWordMassive[j] = oneWord[j];   
        }
        // console.log(oneWordMassive) // ЭТО МАССИВ СЛОВА!
// ======================================================>
        //////////
        let inputVal = input.value;
        let allLenInput = inputVal.length;
        //console.log(allLenInput) ;//////////////////////////////////////

        for (n = 0; n < inputVal.length; n++) {             // Начало Основного цикла
            inputMas[n] = inputVal[n];                      // Массив из инпута
            // console.log(inputVal[i])
            // console.log(n)                                  // индекс инпута        
        }
        // ======================================================>

        let resourchedWord = [];    //МАССИВ С ЧИСЛАМИ ИМЕЕТ ДЛИНУ
        for (m = 0; m < oneWordMassive.length; m++) {                 // цикл сравнивание с Массивом слова списка
    
            if (oneWordMassive.indexOf(inputMas[m]) != -1){
                resourchedWord[m] = oneWordMassive.indexOf(inputMas[m]);         // Массив нахождения совпадений из листа
                                                                                // получили массив совподений индексов                   
                
            } else {
                // resourchedWord.pop(); 
            }
            // console.log(resourchedWord.length) 
           // console.log(resourchedWord)          // НЕ СРАБОТАЛО
            // pppI[i] = arrI.indexOf(inputMas[i]);
        }
        // console.log(inputMas) ; //содержание инпута
        // console.log(resourchedWord) ; //содержание совподения
        // console.log(n) ;
        // console.log(resourchedWord.length + ' == ' + inputVal.length)
        // ======================================================>

        let allLenResourched = resourchedWord.length;


        // console.log(allLenResourched) ;
        // console.log(resourchedWord[1]) ;
        // console.log(inputMas[0]) ;

        // for(let p = 0; p < allLenInput; p++ ){              // цикл инпута
            // console.log('=============================');
            // console.log(resourchedWord[p]) ;
            // let l = 0;
            // console.log(allLenInput - 1);
            // console.log(resourchedWord[resourchedWord]);
            // console.log('=============================');
            // console.log(allLenInput - 1 + ' === ' + resourchedWord[allLenInput - 1]);  
        // ==========================================================================================>
                // console.log(allLenInput); 
            // if ( allLenInput  === resourchedWord ) {      //
            //     // console.log(allLenInput - 1 + ' === ' + resourchedWord[allLenInput - 1]);                           //
            //     //    if ( allLenInput - 1 === allLenResourched ){
            //         console.log(oneWord); 
            //     //    }
            //        // continue;   //????????                        // ЗДЕСЬ ЗАКОНЧИЛ ВЧЕРА
                    
            //     }else {     
            //     liAll[i].remove();
            //     //
            //     // oneWord.remove();                               //
            //     // console.log(liAll[i]);

            // }
        // }

        if ( allLenResourched - backSpace === allLenInput ) {               // Сравнение и Отбор
            // console.log('TRUE');
            console.log(allLenResourched - backSpace + '==' + allLenInput);
            // console.log(allLenInput);
            // liAll[i].prepend();

        }else { 
            // console.log('FALSE'); 
            liAll[i].remove();
            // if ( allLenInput === 0 ) {formingList();}
    }
    console.log( allLenResourched - backSpace + '==' + allLenInput + '|||||||||||');
// ======================================================>

    }

    // let pppI = [];

    // let resourchedWord = [];
    // for (m = 0; m < oneWordMassive.length; m++) {                 // цикл сравнивание с Массивом слова списка

    //     if (oneWordMassive.indexOf(inputMas[m]) != -1){
    //         resourchedWord[m] = oneWordMassive.indexOf(inputMas[m]);         // нахождения совпадений из листа

    
    //     } else {
    //         // resourchedWord.pop(); 
    //     }
    //     // pppI[i] = arrI.indexOf(inputMas[i]);
    // }
    // console.log(inputMas)
        // console.log(resourchedWord.length + ' == ' + inputVal.length)
        // console.log(resourchedWord + ' == ' + inputVal)
        // console.log(pppI)

}

