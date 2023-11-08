'use strict'


document.addEventListener("DOMContentLoaded", function() {
  // ボタン要素を取得
  const myButton = document.getElementById("myButton1");

  // アラートメッセージを表示するための要素を取得
  const message = document.getElementById("message");

  // ボタンがクリックされたときに実行される関数
  myButton.addEventListener("click", function() {
      message.textContent = "商品紹介ページに進む";
      message.style.display = "block"; // メッセージを表示
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // ボタン要素を取得
  const myButton = document.getElementById("myButton2");

  // アラートメッセージを表示するための要素を取得
  const message = document.getElementById("message");

  // ボタンがクリックされたときに実行される関数
  myButton.addEventListener("click", function() {
      message.textContent = "コンシェルジュサービスを利用する";
      message.style.display = "block"; // メッセージを表示
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // ボタン要素を取得
  const myButton = document.getElementById("myButton3");

  // アラートメッセージを表示するための要素を取得
  const message = document.getElementById("message");

  // ボタンがクリックされたときに実行される関数
  myButton.addEventListener("click", function() {
      message.textContent = "年末セールのお知らせがあります";
      message.style.display = "block"; // メッセージを表示
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // ボタン要素を取得
  const myButton = document.getElementById("myButton4");

  // アラートメッセージを表示するための要素を取得
  const message = document.getElementById("message");

  // ボタンがクリックされたときに実行される関数
  myButton.addEventListener("click", function() {
      message.textContent = "マイページに進む";
      message.style.display = "block"; // メッセージを表示
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // ボタン要素を取得
  const myButton = document.getElementById("myButton5");

  // アラートメッセージを表示するための要素を取得
  const message = document.getElementById("message");

  // ボタンがクリックされたときに実行される関数
  myButton.addEventListener("click", function() {
      message.textContent = "連載記事を読む";
      message.style.display = "block"; // メッセージを表示
  });
});

// slideshow.js
let slideIndex = 0;

showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';

    setTimeout(showSlides, 2000); // 2秒ごとにスライドを切り替え
}
