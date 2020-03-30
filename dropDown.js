const innerInputMas = document.querySelector('.innerSearch');
innerInputMas.onkeyup = funcSearch;
const innerListMassive = document.querySelectorAll('.changing li');
const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');
let filter;
// console.log(innerInputMas.innerText);
// let removeList, pFor;

// li.remove('');
// ul.prepend('hi');
let t = [-100, 100, -10, -20 , 20]
let fl = t.filter(function (number){
    return number < 0;
})
console.log(fl)
console.log(li)

// console.log(li.length)
for (let i = 0; i < li.length;i++ ) {
    if (li[2]){
    // console.log(li[i])
    
    // ul.remove(li[5])
    }

}
// ul.remove(li[2])



function funcSearch () {                                // Функция
let removeList, pFor;
    // console.log(innerInputMas.value);


// console.log( innerInputMas.innerText );
let p = innerInputMas.value;
// console.log(p)

for (let i = 0; i < p.length; i+= 1 ) {             // переберает буквы инпута
    // console.log(p[i])
    pFor = p[i]
}
// console.log(pFor)

// let n = innerListMassive.length;
let n = li.length;
for ( let i = 0; i < n; i++ ) {                      // переберает весь список
    ul.remove(removeList)
    // if ( p ) {

    // console.log(innerListMassive[i].innerText);
    const eachWord = innerListMassive[i].innerText; // только внутненний текст
    // console.log(eachWord.length);
    // console.log(eachWord);
    //console.log(li[i]); // весь список
    removeList = li[i];
    let countList = i;

    for ( let i = 0; i < eachWord.length; i++ ){    // переберает все буквы в списке
        // console.log( eachWord[i] ); // все буквы
        if ( pFor === eachWord[i] ) {                // сравнивает букву со всеми
            // console.log(p)
            console.log(countList)
            // break;
            if ( countList ) {
                // ul.remove(removeList)

                // console.log(p)
                let liFirst = document.createElement('li');
                 liFirst.innerHTML = `${removeList}`;
                // console.log(removeList);
                ul.prepend(liFirst);
            } 

            // console.log(removeList);

         }
        //  else {
        //   let l =  ul.remove(removeList);
        //   console.log(l)

        //  }
    }
// }

    // here!!!!!!!!!!

}
}

// Получает букву
// Входит в перебор списка
// Входит в перебор букв
// входит в условие совпадения
//


//сравниваются буквы == удаляются  слова с несовпадениями
//что имею = li[i]




// const liOne = document.querySelector('.eachLi');
// const adge = document.querySelector('.adge');
// const yam = document.querySelector('.yam');

// let o = liOne.innerText.length;
// for ( let i = 0; i < o; i++ ) {
//  console.log(liOne.innerText[i]);
// }

// function funcSearch () {
// }
    // innerListMassive[i].classList.add("eachLi");
