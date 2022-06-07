const numbersContainer = document.querySelector('.inner');

for(let i = 1; i <= 100; i++) {
    let newLi = `<li>${i} </li> `;

    if( i % 3 === 0 && i % 5 === 0 ) {
        numbersContainer.append('fizzbuzz');
    } else if ( i % 3 === 0) {
        numbersContainer.append ('fizz');
    } else if (i % 5 === 0) {
        numbersContainer.append ('buzz');
    
    }else 
    numbersContainer.innerHTML += newLi;
  }
