const numbersContainer = document.querySelector('.inner');

for(let i = 1; i <= 100; i++) {
    let newLi = `<div class="box">${i} </div> `;

    if( i % 3 === 0 && i % 5 === 0 ) {
        numbersContainer.innerHTML +='<div class="box red">Buzzfizz</div>';
    } else if ( i % 3 === 0) {
        numbersContainer.innerHTML +='<div class="box green">Fizz</div>';
    } else if (i % 5 === 0) {
        numbersContainer.innerHTML +='<div class="box yellow">Buzz</div>';
    
    }else 
    numbersContainer.innerHTML += newLi;
  }
