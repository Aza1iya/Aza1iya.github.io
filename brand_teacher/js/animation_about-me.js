// Переменные цветов
const colors = {
  block: '232323',
  shadow: 'b6b6b6',
  blockSq: 'fcfcfc',
  textLight: 'fff',
  textDark: '000'
};

// Переменная для хранения начального положения countBox
let initialTransformPosition = {};

// Функция для обработки наведения
function handleMouseOver(countElementId, infoBoxId, countBoxId, transformValue) {
  const boxes = document.querySelectorAll('.about-me__item.col-md-3');
  const infoBox = document.getElementById(infoBoxId);
  const countCard = document.getElementById(countElementId).querySelector('.card');
  const countBox = document.getElementById(countBoxId);

  // Сохраняем начальное положение countBox
  initialTransformPosition[countBoxId] = countBox.style.transform;

  // Изменение стилей квадрата
  countCard.style.backgroundColor = `#${colors.block}`;
  countCard.style.boxShadow = '0 0 150px 0 rgba(91, 43, 153, 0.59)';
  countCard.style.color = `#${colors.textLight}`;

  boxes.forEach(box => {
    if (box.id!== countBoxId) {
      box.classList.add('hidden');
    }
  });

  infoBox.classList.add('visible');

  // Изменение положения countBox
  countBox.style.transform = `translateX(${transformValue})`;
}

// Функция для обработки ухода курсора
function handleMouseOut(countElementId, infoBoxId, countBoxId) {
  const boxes = document.querySelectorAll('.about-me__item.col-md-3');
  const infoBox = document.getElementById(infoBoxId);
  const countCard = document.getElementById(countElementId).querySelector('.card');
  const countBox = document.getElementById(countBoxId);

  // Восстанавливаем начальное положение countBox
  countBox.style.transform = initialTransformPosition[countBoxId];

  // Изменение стилей квадрата
  countCard.style.backgroundColor = `#${colors.blockSq}`;
  countCard.style.boxShadow = `0 4px 20px 0 #${colors.shadow}`;
  countCard.style.color = `#${colors.textDark}`;

  boxes.forEach(box => {
    box.classList.remove('hidden');
  });

  infoBox.classList.remove('visible');
}

// Применение функций к конкретным элементам
document.getElementById('first_box_count').addEventListener('mouseover', () => handleMouseOver('first_box_count', 'first_box_info', 'first_box_count', '0%'));
document.getElementById('first_box_count').addEventListener('mouseout', () => handleMouseOut('first_box_count', 'first_box_info', 'first_box_count'));

document.getElementById('second_box_count').addEventListener('mouseover', () => handleMouseOver('second_box_count', 'second_box_info', 'second_box_count', '-100%'));
document.getElementById('second_box_count').addEventListener('mouseout', () => handleMouseOut('second_box_count', 'second_box_info', 'second_box_count'));

document.getElementById('third_box_count').addEventListener('mouseover', () => handleMouseOver('third_box_count', 'third_box_info', 'third_box_count', '-200%'));
document.getElementById('third_box_count').addEventListener('mouseout', () => handleMouseOut('third_box_count', 'third_box_info', 'third_box_count'));

document.getElementById('fourth_box_count').addEventListener('mouseover', () => handleMouseOver('fourth_box_count', 'fourth_box_info', 'fourth_box_count', '-300%'));
document.getElementById('fourth_box_count').addEventListener('mouseout', () => handleMouseOut('fourth_box_count', 'fourth_box_info', 'fourth_box_count'));
