// phonehandelar
const phoneIncrease = document.getElementById('phone-increase').addEventListener('click', function(){
    phoneadd(true);
    
});

const phoneDecrease = document.getElementById('phone-decrease').addEventListener('click', function(){
    phoneadd(false); 

});
function phoneadd (isadd){
    const phoneCount = document.getElementById('phone-count');
    const phoneNumber = parseInt(phoneCount.value);
    // const phoneNewNumber = phoneNumber -1;
    let phoneNewNumber = phoneNumber ;
    if(isadd==true){
        phoneNewNumber = phoneNumber +1;
    }
    if(isadd==false && phoneNumber >0){
        phoneNewNumber= phoneNumber -1;
    }
    phoneCount.value = phoneNewNumber;
    const phoneTotal = phoneNewNumber *1219;
    document.getElementById('phone-total').innerText = '$' +phoneTotal;
    calculetTotal();
}

// const phoneIncrease = document.getElementById('phone-increase').addEventListener('click', function(){
//     const phoneCount = document.getElementById('phone-count');
//     const phoneNumber = parseInt(phoneCount.value);
//     const phoneNewNumber = phoneNumber +1;
//     phoneCount.value = phoneNewNumber;
//     const phoneTotal = phoneNewNumber *1219;
//     document.getElementById('phone-total').innerText = '$' +phoneTotal;
// });

// const phoneDecrease = document.getElementById('phone-decrease').addEventListener('click', function(){
//     const phoneCount = document.getElementById('phone-count');
//     const phoneNumber = parseInt(phoneCount.value);
//     const phoneNewNumber = phoneNumber -1;
//     phoneCount.value = phoneNewNumber;
//     const phoneTotal = phoneNewNumber *1219;
//     document.getElementById('phone-total').innerText = '$' +phoneTotal;

// })

// casehandelar
let caseButton = document.getElementById('Case-incres').addEventListener('click', function(){
 handlePrudactItem(true);
});
let caseDcrase = document.getElementById('case-decrase').addEventListener('click', function(){
    handlePrudactItem(false);
})

function handlePrudactItem (isincrase){
    let caseInput = document.getElementById('case-count');
    let caseCount = parseInt(caseInput.value);
   
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
    calculetTotal();
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

// calculettotal
function calculetTotal(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    

    const totalPrice = phoneCount*1219 + caseCount*59;
    document.getElementById('total-price').innerText='&' +totalPrice;

    const tex = math.round(totalPrice/10);
    document.getElementById('tax-amount').innerText ='&' +tex;

    const grandTotal = totalPrice+tex;
    document.getElementById('grand-total').innerText='$'+grandTotal ;
    
}
function inputadd(){
    let caseInput = document.getElementById('case-count');
    let caseCount = parseInt(caseInput.value);
    return caseCount;
}