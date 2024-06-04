


$(document).ready(function () {

  window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //현재 스크롤 위치
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //전체 스크롤 값
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //
    var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    var progressBar = document.querySelector('#progress');
    progressBar.style.display = 'block';
    progressBar.style.width = scrolled + '%';
  })
})



// $.ajax({
//   type: 'GET',
//   url: 'https://codingapple1.github.io/hello.txt'
// }).done(function (결과) {
//   console.log('gogogogo');
// });

// $.get('https://codingapple1.github.io/hello.txt').done(function (결과) {
//   console.log(결과)
// })


// var imgloading = new Promise(function (성공, 실패) {
//   var img = document.querySelector('#test');
//   img.addEventListener('load', function () {
//     성공();
//   });
//   img.addEventListener('error', function () {
//     실패();
//   });
// });

// imgloading.then(function () {
//   console.log('good');
// }).catch(function () {
//   console.log('bad')
// });


