// let sectionCounter = document.querySelector('.about-me');
// let valueDisplays = document.querySelectorAll(".about-me__card-text");

// let counterObserver = new IntersectionObserver((entries, observer)=>{
//   let [entry] = entries;

//   if (!entry.isIntersecting) return;

//   let speed = 1000;
//   valueDisplays.forEach((valueDisplay, index) => {
//     function UpdateCounter() {
//       const targetNumber =+ valueDisplay.dataset.target;
//       const initialNumber =+ valueDisplay.innerText;
//       const incPerCount = targetNumber / speed;

//       if (initialNumber < targetNumber) {
//         valueDisplay.innerText = Math.ceil(initialNumber + incPerCount);
//         setTimeout(UpdateCounter, 15);
//       }
//     }
//     UpdateCounter();
//   });
// },{
//   root: null,
//   threshold: 1
// });

// counterObserver.observe(sectionCounter);

var time = 2, cc = 1;
$(window).scroll(function(){
  $('#counter').each(function(){
    var cPos = $(this).offset().top,
    topWindow = $(window).scrollTop();
    if (cPos < topWindow + 220) {
      if (cc < 2) {
        $('.about-me__card-text').addClass('hidden-text');
        $('p').each(function(){
          var i = 1,
          num = $(this).data('target'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
            } else {
              cc = cc + 2;
              clearInterval(int);
            }
            i++;
          },step);
        });           
      }
    }
  });
})
