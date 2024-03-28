let sectionCounter = document.querySelector('.about-me');
let valueDisplays = document.querySelectorAll(".about-me__card-text");

let counterObserver = new IntersectionObserver((entries, observer)=>{
  let [entry] = entries;

  if (!entry.isIntersecting) return;

  let speed = 100;
  valueDisplays.forEach((valueDisplay, index) => {
    function UpdateCounter() {
      const targetNumber =+ valueDisplay.dataset.target;
      const initialNumber =+ valueDisplay.innerText;
      const incPerCount = targetNumber / speed;

      if (initialNumber < targetNumber) {
        valueDisplay.innerText = Math.ceil(initialNumber + incPerCount);
        setTimeout(UpdateCounter, 15);
      }
    }
    UpdateCounter();
  });
},{
  root: null,
  threshold: 1
});

counterObserver.observe(sectionCounter);