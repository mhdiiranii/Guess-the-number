let ranNumber = Math.floor(Math.random()*20);
let number = document.querySelector('#selectNumber')
let guess = document.querySelector("#guess");
let restart = document.querySelector('#restart')


restart.addEventListener('click', ()=>{
    let secNumber = Math.floor(Math.random()*20);
    let typeAnswer = document.querySelector('#threeEleman>p');
    number.disabled = false;
    number.value = '';
    document.querySelector('.box').style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
    typeAnswer.innerHTML = '';
    ranNumber = secNumber;
    console.log(ranNumber);
})

guess.addEventListener('click', ()=>{
    let choseNumber = Number(document.querySelector('#selectNumber').value);
    let typeAnswer = document.querySelector('#threeEleman>p');

    if (choseNumber && choseNumber >= 1){
        if (choseNumber>ranNumber){
            typeAnswer.innerHTML = "too big";
            document.querySelector('.box').style.boxShadow = '0px 0px 10px rgba(255,0,0,0.5)'
        }else if(choseNumber<ranNumber){
            typeAnswer.innerHTML =  "too short";
            document.querySelector('.box').style.boxShadow = '0px 0px 10px rgba(255,0,0,0.5)'
        }else {
            typeAnswer.innerHTML = "you win";
            number.disabled = true;
            document.querySelector('.box').style.boxShadow = '0px 0px 10px rgb(10 200 10)'
        }
    }
})
number.addEventListener('keypress', (e)=>{
    let choseNumber = Number(document.querySelector('#selectNumber').value);
    let typeAnswer = document.querySelector('#threeEleman>p');

    if(e.key === 'Enter'){
        if (choseNumber && choseNumber >= 1){
            if (choseNumber>ranNumber){
                typeAnswer.innerHTML = "too big";
                document.querySelector('.box').style.boxShadow = '0px 0px 10px rgba(255,0,0,0.5)'
            }else if(choseNumber<ranNumber){
                typeAnswer.innerHTML =  "too short";
                document.querySelector('.box').style.boxShadow = '0px 0px 10px rgba(255,0,0,0.5)'
            }else {
                typeAnswer.innerHTML = "you win";
                number.disabled = true;
                document.querySelector('.box').style.boxShadow = '0px 0px 10px rgb(10 200 10)'
            }
        }
    }
})


number.addEventListener('input',(e)=>{
    let typeAnswer = document.querySelector('#threeEleman>p');
    let myValue = number.value;
    typeAnswer.innerHTML = '';
    if(myValue == ''){
        document.querySelector('.box').style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
    }
})
console.log(ranNumber);