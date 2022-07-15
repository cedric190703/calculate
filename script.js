const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const number = document.getElementById("cpt");
const add = document.getElementById("plus");
const minus = document.getElementById("minus");
add.addEventListener("click",plus);
minus.addEventListener("click",moins);

let cpt = Number(number.innerText);

function plus () {
    cpt++;
    number.innerHTML = cpt;
    calculatebill();
}

function moins () {
    cpt--;
    if(cpt < 0){
        cpt = 0;
    }
    number.innerHTML = cpt;
    calculatebill();
}

function percentage (e,Tip) {
    if(e >= 0) {
        let result = Number((e*Tip)/100);
        result+=Number(e);
        return result;
    }
}

const calculatebill = () => {
    let bill = Number(billInput.value);
    if(cpt != 0) {
        bill = (Number(billInput.value)/cpt).toFixed(2);
        
    } else {
        bill = 0
    }
    let tip = Number(tipInput.value);
    if(bill != ""){
        if(tip == "") {
            const final = document.getElementById("answerThree").innerHTML = `<h1>$${bill}</h1>`;
        } else {
            const final = document.getElementById("answerThree").innerHTML = `<h1>$${percentage(bill,tip)}</h1>`;
        }
    } else {
        const final = document.getElementById("answerThree").innerHTML = "<h1>$0.00</h1>";
    }
}

document.getElementById("submit").addEventListener("click",calculatebill);