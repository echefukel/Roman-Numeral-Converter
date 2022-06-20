const btn = document.getElementById('btn');
const display = document.getElementById('display');
const input = document.querySelector('input');

// create Roman Numeral Converter
const converter = (num)=>{
    let roman = '';

    // create roman numeral  object
    const numerals = {
        M : 1000,
        CM: 900,
        D : 500,
        CD: 400,
        C : 100,
        XC: 90,
        L : 50,
        XL: 40,
        X : 10,
        IX: 9,
        V : 5,
        IV: 4,
        I : 1
    }
// we are looping through the numerals object
    for(const numeral in numerals){
        let digit = numerals[numeral];
        // condition on how to subtract and get numeral
        while(digit <= num){
            roman += numeral;
            num -= digit
        }
    }
    display.textContent = roman;
}
converter();


// create the update DOM function
const updateDOM = () =>{
let val = input.value;
let num = parseInt(val)
// check if value exceeded
if(val >= 4000){
    display.textContent='Number is greater than 3999'
}else{
converter(num)
}
}


// Create Event listeners

btn.addEventListener('click',updateDOM);