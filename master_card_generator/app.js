
// target all the DOM elements
var form = document.getElementById('form');
var first_name = document.getElementById('first-name');
var last_name = document.getElementById('last-name');
var middle_name = document.getElementById('middle-name');
var card_number = document.querySelectorAll('#card-number');
var expiry_date = document.getElementById('expiry-date');
var card_type = document.getElementById('card-type');
var currency_type = document.getElementById('currency-type');
var ccv = document.getElementById('ccv');
var auth_code = document.getElementById('authorisation-code');
var gen_btn = document.getElementById('gen-btn');
var naira = document.querySelector('.currency');
var cardContainer = document.querySelector('.card-container');
var atm_card_type = document.querySelector(".atm_card_type")
var atm_card_num = document.querySelector(".card_num");
var atm_expiry = document.querySelector(".expiry");
var holder = document.querySelector('.holder');
var atm_card = document.querySelector('.atm-card');
var flip_btn = document.querySelector('.flip-btn');
var blackseal = document.querySelector('.black-seal');
var ccvNum = document.querySelector('.ccvNo');



form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

flip_btn.addEventListener("click", rotateCard);

function rotateCard(e) {
    e.preventDefault();
    atm_card.classList.toggle("rotate");
}

function checkInputs() {

    if (first_name.value.trim() === '') {
        //display an error message
        //add error class
        setErrorFor(first_name, "first name is required");

    } else {
        // add success class
        setSuccessFor(first_name);
    }

    if (middle_name.value.trim() === '') {
        //display an error message
        //add error class
        setErrorFor(middle_name, "middle name is required");

    } else {
        // add success class
        setSuccessFor(middle_name);
    }

    if (last_name.value.trim() === '') {
        //display an error message
        //add error class
        setErrorFor(last_name, "last name is required");

    } else {
        // add success class
        setSuccessFor(last_name);
    }


    for (var k = 0; k < card_number.length; k++) {

        if (card_number[k].value.trim() === '') {
            //display an error message
            //add error class
            setErrorFor(card_number[k], "Card  number is required");

        } else if (card_number[k].value.trim().length !== 4) {
            setErrorFor(card_number[k], "Invalid Card Number");


        } else {
            // add success class
            setSuccessFor(card_number[k]);

        }




    }

    if (expiry_date.value.trim() === '') {
        //display an error message
        //add error class
        setErrorFor(expiry_date, "Expiry Date is required");

    } else {
        // add success class
        setSuccessFor(expiry_date);
    }

    if (card_type.value.trim() === 'select') {
        //display an error message
        //add error class
        setErrorFor(card_type, "Select card type");

    } else {
        // add success class
        setSuccessFor(card_type);
    }

    if (currency_type.value.trim() === 'select') {
        //display an error message
        //add error class
        setErrorFor(currency_type, "Select currency");

    } else {
        // add success class
        setSuccessFor(currency_type);
    }

    if (ccv.value.trim() === '') {
        //display an error message
        //add error class
        setErrorFor(ccv, "CCV is required");

    } else if (ccv.value.trim().length !== 3) {
        setErrorFor(ccv, "Invalid CCV");

    } else {
        // add success class
        setSuccessFor(ccv);
    }

    if (auth_code.value.trim() === '') {
        //display an error message
        //add error class
        setErrorFor(auth_code, "Authorisation Code is required");

    } else if (auth_code.value.trim().length !== 14) {
        setErrorFor(auth_code, "Invalid Authorisation Code");

    } else {
        // add success class
        setSuccessFor(auth_code);
    }

    if (currency_type.value === 'naira') {
        naira.innerHTML = "naira";
    } else if (currency_type.value === 'dollar') {
        naira.innerHTML = "dollar";
        cardContainer.className = "card-container dollar"
        cardContainer.style.background = "#ccc";
        blackseal.style.background = "black";

    } else {
        naira.innerHTML = "";

    }

    if (card_type.value === 'debit') {
        atm_card_type.innerText = "debit";
    } else if (card_type.value === "credit") {
        atm_card_type.innerText = "credit";
    } else {
        atm_card_type.innerText = "";

    }

    atm_expiry.innerText = expiry_date.value;
    if (first_name.value.trim().length + middle_name.value.trim().length + last_name.value.trim().length >= 30) {
        holder.innerText = first_name.value.trim() + " " + last_name.value.trim() + " " + middle_name.value.trim()[0];
    } else {
        holder.innerText = first_name.value.trim() + " " + last_name.value.trim() + " " + middle_name.value.trim();

    }
    if (first_name.value && last_name.value && middle_name.value && card_number[0].value && card_number[1].value && card_number[2].value && card_number[3].value && expiry_date.value && card_type.value && currency_type.value && auth_code.value) {
        cardContainer.style.display = "flex"
    } else {

        cardContainer.style.display = "none"


    }

    // get the  card number inputs

    var cardNo1 = card_number[0].value;

    var cardNo2 = card_number[1].value;

    var cardNo3 = card_number[2].value;
    var cardNo4 = card_number[3].value;

    atm_card_num.innerHTML = cardNo1 + " " + cardNo2 + " " + cardNo3 + " " + cardNo4;

    // get the ccv inputs

    ccvNum.innerText = ccv.value;
}






function setErrorFor(input, message) {
    var input_parent = input.parentElement;
    var small = input_parent.querySelector('small');
    input_parent.className = "input-parent error";
    small.innerText = message;



}

function setSuccessFor(input) {
    var input_parent = input.parentElement;
    input_parent.className = "input-parent success";


}