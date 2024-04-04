// переменные цвета
const blockColor = '232323';
const shadowColor = 'b6b6b6';
const blockSqColor = 'ececec';
const textLightColor = 'fff';
const textDarkColor = '000';

// при наведении на первый квадрат
document.getElementById('first_box_count').addEventListener('mouseover', function() {
  var boxes = document.querySelector('.about-me__list').querySelectorAll('.col-lg-3');
  var infoBox = document.getElementById('first_box_info');
  var countCard = document.getElementById('first_box_count').querySelector('.card');
  
  // изменение стилей квадрата
  countCard.style.backgroundColor = `#${blockColor}`;
  countCard.style.boxShadow = '0 0 150px 0 rgba(91, 43, 153, 0.59)';
  countCard.style.color = `#${textLightColor}`;

  boxes.forEach(function(box) {
    if (box.id !== 'first_box_count') {
      box.classList.add('hidden');
    }
  });

  infoBox.classList.add('visible');
});

document.getElementById('first_box_count').addEventListener('mouseout', function() {
  var boxes = document.querySelector('.about-me__list').querySelectorAll('.col-lg-3');
  var infoBox = document.getElementById('first_box_info');
  var countCard = document.getElementById('first_box_count').querySelector('.card');

  // изменение стилей квадрата
  countCard.style.backgroundColor = `#${blockSqColor}`;
  countCard.style.boxShadow = `0 4px 20px 0 #${shadowColor}`;
  countCard.style.color = `#${textDarkColor}`;

  boxes.forEach(function(box) {
    box.classList.remove('hidden');
  });

  infoBox.classList.remove('visible');
});


// при наведении на второй квадрат
document.getElementById('second_box_count').addEventListener('mouseover', function() {
  var boxes = document.querySelector('.about-me__list').querySelectorAll('.col-lg-3');
  var infoBox = document.getElementById('second_box_info');
  var countBox = document.getElementById('second_box_count');
  var countCard = document.getElementById('second_box_count').querySelector('.card');

  // изменение положения box'а
  countBox.style.transform = 'translateX(-100%)';

  // изменение стилей квадрата
  countCard.style.backgroundColor = `#${blockColor}`;
  countCard.style.boxShadow = '0 0 150px 0 rgba(91, 43, 153, 0.59)';
  countCard.style.color = `#${textLightColor}`;

  boxes.forEach(function(box) {
    if (box.id !== 'second_box_count') {
      box.classList.add('hidden');
    }
  });

  infoBox.classList.add('visible');
});

document.getElementById('second_box_count').addEventListener('mouseout', function() {
  var boxes = document.querySelector('.about-me__list').querySelectorAll('.col-lg-3');
  var infoBox = document.getElementById('second_box_info');
  var countBox = document.getElementById('second_box_count');
  var countCard = document.getElementById('second_box_count').querySelector('.card');

  // изменение положения box'а
  countBox.style.transform = 'translateX(0%)';

  // изменение стилей квадрата 
  countCard.style.backgroundColor = `#${blockSqColor}`;
  countCard.style.boxShadow = `0 4px 20px 0 #${shadowColor}`;
  countCard.style.color = `#${textDarkColor}`;

  boxes.forEach(function(box) {
    box.classList.remove('hidden');
  });

  infoBox.classList.remove('visible');
});


// при наведении на третий квадрат
document.getElementById('third_box_count').addEventListener('mouseover', function() {
  var boxes = document.querySelector('.about-me__list').querySelectorAll('.col-lg-3');
  var infoBox = document.getElementById('third_box_info');
  var countBox = document.getElementById('third_box_count');
  var countCard = document.getElementById('third_box_count').querySelector('.card');

  // изменение положения box'а
  countBox.style.transform = 'translateX(-200%)';

  // изменение стилей квадрата 
  countCard.style.backgroundColor = `#${blockColor}`;
  countCard.style.boxShadow = '0 0 150px 0 rgba(91, 43, 153, 0.59)';
  countCard.style.color = `#${textLightColor}`;

  boxes.forEach(function(box) {
    if (box.id !== 'third_box_count') {
      box.classList.add('hidden');
    }
  });

  infoBox.classList.add('visible');
});

document.getElementById('third_box_count').addEventListener('mouseout', function() {
  var boxes = document.querySelector('.about-me__list').querySelectorAll('.col-lg-3');
  var infoBox = document.getElementById('third_box_info');
  var countBox = document.getElementById('third_box_count');
  var countCard = document.getElementById('third_box_count').querySelector('.card');

  // изменение положения box'а
  countBox.style.transform = 'translateX(0%)';

  // изменение стилей квадрата 
  countCard.style.backgroundColor = `#${blockSqColor}`;
  countCard.style.boxShadow = `0 4px 20px 0 #${shadowColor}`;
  countCard.style.color = `#${textDarkColor}`;

  boxes.forEach(function(box) {
    box.classList.remove('hidden');
  });

  infoBox.classList.remove('visible');
});


// при наведении на четвертый квадрат
document.getElementById('fourth_box_count').addEventListener('mouseover', function() {
  var boxes = document.querySelector('.about-me__list').querySelectorAll('.col-lg-3');
  var infoBox = document.getElementById('fourth_box_info');
  var countBox = document.getElementById('fourth_box_count');
  var countCard = document.getElementById('fourth_box_count').querySelector('.card');

  // изменение положения box'а
  countBox.style.transform = 'translateX(-300%)';

  // изменение стилей квадрата 
  countCard.style.backgroundColor = `#${blockColor}`;
  countCard.style.boxShadow = '0 0 150px 0 rgba(91, 43, 153, 0.59)';
  countCard.style.color = `#${textLightColor}`;

  boxes.forEach(function(box) {
    if (box.id !== 'fourth_box_count') {
      box.classList.add('hidden');
    }
  });

  infoBox.classList.add('visible');
});

document.getElementById('fourth_box_count').addEventListener('mouseout', function() {
  var boxes = document.querySelector('.about-me__list').querySelectorAll('.col-lg-3');
  var infoBox = document.getElementById('fourth_box_info');
  var countBox = document.getElementById('fourth_box_count');
  var countCard = document.getElementById('fourth_box_count').querySelector('.card');

  // изменение положения box'а
  countBox.style.transform = 'translateX(0%)';

  // изменение стилей квадрата 
  countCard.style.backgroundColor = `#${blockSqColor}`;
  countCard.style.boxShadow = `0 4px 20px 0 #${shadowColor}`;
  countCard.style.color = `#${textDarkColor}`;

  boxes.forEach(function(box) {
    box.classList.remove('hidden');
  });

  infoBox.classList.remove('visible');
});