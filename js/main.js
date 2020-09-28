'use strict';

{
  const monster = [
    'img/zasu7.jpg',
    'img/zasu6.jpg',
    'img/zasu6.jpg',
    'img/zasu6.jpg',
    'img/zasu5.jpg',
    'img/zasu5.jpg',
    'img/zasu5.jpg',
    'img/zasu5.jpg',
    'img/zasu5.jpg',
    'img/zasu5.jpg',
    'img/zasu5.jpg',
    'img/zasu5.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',
    'img/zasu4.jpg',    //4-50%, 5-30%, 6-15%, 7-5%
  ];

  const btn = document.getElementById('btn');
  let currentNum = 0;
  
  function result() {
    currentNum++;
    const img = document.getElementById(currentNum);
    img.src = monster[Math.floor(Math.random() * monster.length)];
  }

  function drawGacha() {
    if (currentNum === 10) {
      btn.classList.remove('disabled');
      btn.classList.add('active');
      btn.href = 'index.html';
      return;
    }
    result();
    setTimeout(() => {
      console.log(currentNum);
      drawGacha();
    }, 1200);
  }


  setTimeout(() => {
    drawGacha();
  }, 1000);


}

