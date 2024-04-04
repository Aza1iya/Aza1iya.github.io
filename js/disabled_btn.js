let clickCount = 0;

document.querySelector('.approval__form').addEventListener('click', () => {
  clickCount++;
  var submit = document.getElementsByName('submit')[0];

  if (clickCount % 2 === 0) {
    document.getElementById('politics').checked = false;
    submit.disabled = 'disabled';
  } else {
    document.getElementById('politics').checked = true;
    submit.disabled = '';
  }
})