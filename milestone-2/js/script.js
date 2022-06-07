const numbersContainer = document.querySelector('.inner');

for(let i = 1; i <= 100; i++) {
    let newLi = `<li>${i} </li> `;

    if( i % 3 === 0 && i % 5 === 0 ) {
        numbersContainer.append += '<li>fizzbuzz</li>';
    } else if ( i % 3 === 0) {
        numbersContainer.innerHTML +='<li>fizz</li>';
        console.log(newLi)
    } else if (i % 5 === 0) {
        numbersContainer.innerHTML += newLi = '<li>buzz</li>';
        newLi = 'buzz'
    
    }else 
    numbersContainer.innerHTML += newLi;
  }

