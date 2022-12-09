const day = document.querySelector('.day');
const month = document.querySelector('.month');

function getDate(e) {
  e.preventDefault();
  +day.value;
  +month.value;

  if (month.value == 1 && day.value >= 20 || month.value == 2 && day.value <= 18) {
    console.log('Водолій');
  } else if (month.value == 2 && day.value >= 19 || month.value == 3 && day.value <= 20) {
    console.log('Риби');
  } else if (month.value == 3 && day.value >= 21 || month.value == 4 && day.value <= 19) {
    console.log('Овен');
  } else if (month.value == 4 && day.value >= 20 || month.value == 5 && day.value <= 20) {
    console.log('Телець');
  } else if (month.value == 5 && day.value >= 21 || month.value == 6 && day.value <= 21) {
    console.log('Близнюки');
  } else if (month.value == 6 && day.value >= 22 || month.value == 7 && day.value <= 22) {
    console.log('Рак');
  } else if (month.value == 7 && day.value >= 23 || month.value == 8 && day.value <= 22) {
    console.log('Лев');
  } else if (month.value == 8 && day.value >= 23 || month.value == 9 && day.value <= 22) {
    console.log('Діва');
  } else if (month.value == 9 && day.value >= 23 || month.value == 10 && day.value <= 22) {
    console.log('Терези');
  } else if (month.value == 10 && day.value >= 23 || month.value == 11 && day.value <= 21) {
    console.log('Скорпіон');
  } else if (month.value == 11 && day.value >= 22 || month.value == 12 && day.value <= 21) {
    console.log('Стрілець');
  } else if (month.value == 12 && day.value >= 22 || month.value == 1 && day.value <= 19) {
    console.log('Козеріг');
  } else {
    console.log('Не вірна дата');
  }

}

document.querySelector('.button').addEventListener('click', getDate);