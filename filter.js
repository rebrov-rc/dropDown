const innerInputMas = document.querySelector('.innerSearch');
// let input = innerInputMas.value
innerInputMas.onkeyup = filt;
// =======================================================>
const innerListMassive = document.querySelector('.changing');
const op = document.querySelectorAll('option');
let innerOp = [];

                                                                        // 1 буква = 1 совпадение / 2 буквы = 2 совпадения / 3 буквы = 3 совпадения

                                                                        

                                                                        // бурёт каждое знач масс > разбирает > 
                                                                        // работает со значениями > возвращает true
                                                                        // след метод собирает тру в новый массив

    // let created = document.createElement('span');
    // console.log(created);
    // let addIn = created.innerText = ('FF, 4568');
    // console.log(addIn);

    // innerListMassive.prepend(created);
    
// function filt () {
//         op.forEach(function (item, i , op){

//             innerOp[i] = item.innerText;
//         })

//         for ( i = 0; i < innerOp.length; i++) { //выбрали слова
//             let x = innerOp[i];
//             console.log( x )

//             for (n=0; n < x.length ; n++) {     // выбрали буквы
//                 // console.log( x[n] );    
//                 let h = x[n]        //каждая буква
//                 if ( h === input ) {         // сделали сравнение
//                     console.log( x )
//                 }
//                 // let filtEnd = 
//             }
//         }
// }

// let fil = inner.filter(function(result) {
//     return inner === input;
// })
// console.log(fil);


// let arrL = op.map(function (innerOp) {
//     return innerOp.length;
// });
// alert(arrL);
// console.log(arrL)




function filt () {
    // console.log(innerInputMas.value)
    let input = innerInputMas.value
    let p, tru = [];
    // 
    op.forEach(function (item, i , op){
        // console.log( item )
        // console.log( item.innerText )
        innerOp[i] = item.innerText;


    })
    // console.log(innerOp)
    // console.log(input)
// ===================================================
    for (i = 0; i < innerOp.length; i++) {
        // console.log(innerOp[i])         // каждое слово
        p = innerOp[i]

                // let fil = p.filter(function(result) {
        
                // return result === input;
                // });
                // console.log(fil);  

        // ==============================================
        // for (n = 0; n < p.length; n++) {
        //     console.log(p[n]);      
        //     let abc = p[n]; // каждая буква
            // ============================================
            // let fil = abc.filter(function(result) {
            //     // for (n = 0; n <   )
        
            //     return result === input;
            // })
            // console.log(fil);   
            // ============================================
        }
        console.log(p); 
        console.log(p.length); 

        // for ( m = 0; m < p.length;m++ ){
        //     console.log(p[m])
        //     tru[m] = p[m];
        // }
        // console.log(tru)




        // let ttt = tru.reduce(function(pre, curr){
        //     return pre + curr
        // })
        // let rr = ttt;
        // console.log(rr)
        // ========================================================
        // function positive () {
        //     return input === p;
        // }
        // console.log(tru.some(positive));
        // ========================================================= 
        // p.forEach(function (item, i , p){
        //     console.log( item )
        //     // console.log( item.innerText )
        //     tru[i] = item;
        // })
        // console.log(tru); 

        // let popi = p.map(function(letMas){
        //     return letMas.length;
        // })
        // console.log(popi); 

        // function positive (tp) {
        //     return input === tp
        // }
        // console.log(p.some(positive)); 

        // p.forEach(function(item, i , p){
        //     console.log(item);
        // })

        // let k = innerOp[i].reduce(function(res, y) {
        //     return res + y;
        // });
        // console.log(k);
    // }

// ===================================================
    let fil = innerOp.filter(function(result) {
        return result === input

    })
    console.log(fil);
    // console.log(fil.length);
    if ( input ) {
    

        if (fil){
            for(e=0;e<fil.length; e++){
                let created = document.createElement('span');
                let addIn = created.innerText = (fil[e]);
                innerListMassive.prepend(created);
            }
        }
    } else {
        let removeTag = document.querySelectorAll('span');

        for(l=0;l<removeTag.length;l++){
        removeTag[l].remove();
        }

    }
    // переберая буквы показывающий слово
                                // теперь нужно фильтровать слова где совпадают буквы
    // if ( fill == true ) {

    // }

}
