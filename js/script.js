// const userName = document.getElementById('name');
const form = document.getElementById('form');
const formButton = document.querySelector('.button');

// Day
const day = document.createElement('select');
day.classList.add('day');
day.setAttribute('type', 'select');
for (let i = 1; i <= 31; i++) {
  const dayOptionElem = document.createElement('option');
  dayOptionElem.setAttribute('value', i);
  dayOptionElem.textContent = i;
  day.append(dayOptionElem);
}
formButton.insertAdjacentElement('beforebegin', day);

// Month
const month = document.createElement('select');
month.classList.add('month');
month.setAttribute('type', 'select');
for (let i = 0; i < monthList.length; i++) {
  const monthOptionElem = document.createElement('option');
  monthOptionElem.setAttribute('value', i + 1);
  monthOptionElem.textContent = monthList[i];
  month.append(monthOptionElem);
}
formButton.insertAdjacentElement('beforebegin', month)

// Рік
// const year = document.createElement('select');
// year.classList.add('year');
// year.setAttribute('type', 'select');
// for (let i = 1920; i < new Date().getFullYear(); i++) {
//   const yearOptionElem = document.createElement('option');
//   yearOptionElem.setAttribute('value', i);
//   yearOptionElem.textContent = i;
//   year.append(yearOptionElem);
// }
// formButton.insertAdjacentElement('beforebegin', year)

let result = '';

function getDate(e) {
  e.preventDefault();

  if (month.value == 1 && day.value >= 20 || month.value == 2 && day.value <= 18) {
    result = 'Водолій';
  } else if (month.value == 2 && day.value >= 19 || month.value == 3 && day.value <= 20) {
    result = 'Риби';
  } else if (month.value == 3 && day.value >= 21 || month.value == 4 && day.value <= 19) {
    result = 'Овен';
  } else if (month.value == 4 && day.value >= 20 || month.value == 5 && day.value <= 20) {
    result = 'Телець';
  } else if (month.value == 5 && day.value >= 21 || month.value == 6 && day.value <= 21) {
    result = 'Близнюки';
  } else if (month.value == 6 && day.value >= 22 || month.value == 7 && day.value <= 22) {
    result = 'Рак';
  } else if (month.value == 7 && day.value >= 23 || month.value == 8 && day.value <= 22) {
    result = 'Лев';
  } else if (month.value == 8 && day.value >= 23 || month.value == 9 && day.value <= 22) {
    result = 'Діва';
  } else if (month.value == 9 && day.value >= 23 || month.value == 10 && day.value <= 22) {
    result = 'Терези';
  } else if (month.value == 10 && day.value >= 23 || month.value == 11 && day.value <= 21) {
    result = 'Скорпіон';
  } else if (month.value == 11 && day.value >= 22 || month.value == 12 && day.value <= 21) {
    result = 'Стрілець';
  } else if (month.value == 12 && day.value >= 22 || month.value == 1 && day.value <= 19) {
    result = 'Козеріг';
  } else {
    // console.log('Не вірна дата');
  }
  Zodiac.render(result);
}

formButton.addEventListener('click', getDate);