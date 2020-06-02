'use strict';


{
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
  //  const results = ['大吉', '中吉','凶','末吉'];
  //  const results = ['大吉', '大吉','大吉','末吉']; //大吉を出やすくする操作1
      const n = Math.random();
      if (n < 0.05){
         button.textContent = '大吉'; //5%で大吉
      }　else if (n <0.2){
         button.textContent = '中吉'; //15%で中吉
      }  else {
         button.textContent = '凶'; //残りは凶！笑
      }
  //  const n = Math.floor(Math.random() * results.length);
  //  button.textContent = results[n]; //resultsを定義してその中の何番目かを適当に出す or

  //  button.textContent = results[Math.floor(Math.random() * results.length)]; //全部つっこむかの二択


   //button.textContent = n;

   //switch (n) {
  //   case 0:
  //     button.textContent = '大吉';
  //   break;
  //   case 1:
  //     button.textContent = '中吉';
  //   break;
  //   case 2:
  //     button.textContent = '凶';
  //   break;

   //}
  });

  button.addEventListener('dblclick', () => {
   button.textContent = 'おみくじ';
    //  const n = Math.random();
    //  if (n < 0.05){
    //     button.textContent = '？'; //5%で大吉
    //  }　else if (n <0.2){
    //     button.textContent = '？'; //15%で中吉
    //  }  else {
    //     button.textContent = '？'; //残りは凶！笑
    //  }

  });
}
