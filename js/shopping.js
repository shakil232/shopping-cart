
let caseButton = document.getElementById('CaseButton').addEventListener('click', function(){
 handlePrudactItem(true);
});
let caseDcrase = document.getElementById('case-decrase').addEventListener('click', function(){
    handlePrudactItem(false);
})

function handlePrudactItem (isincrase){
    let caseInput = document.getElementById('case-count');
    let caseCount = parseInt(caseInput.value);
    // let caseNewCount= caseCount -1;
    let caseNewCount= caseCount;
    if(isincrase==true){
        caseNewCount= caseCount +1;
    }
    if(isincrase==false && caseCount >0){
        caseNewCount= caseCount -1;
    }
    caseInput.value = caseNewCount ;
    let caseTotal = caseNewCount *59;
    document.getElementById('case-total').innerText= '$' +caseTotal;
}





// let caseButton = document.getElementById('CaseButton').addEventListener('click', function(){
//     let caseInput = document.getElementById('case-count');
//     let caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount +1;
//     caseInput.value = caseNewCount;
//     let caseTotal = caseNewCount *59;
//    document.getElementById('case-total').innerText = '$' +caseTotal;
// });
// let caseDcrase = document.getElementById('case-decrase').addEventListener('click', function(){
//     let caseInput = document.getElementById('case-count');
//     let caseCount = parseInt(caseInput.value);
//     let caseNewCount= caseCount -1;
//     caseInput.value = caseNewCount ;
//     let caseTotal = caseNewCount *59;
//     document.getElementById('case-total').innerText= '$' +caseTotal;
// })