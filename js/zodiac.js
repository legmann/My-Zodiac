class Zodiac {
  constructor() {
  }
  static render() {
    for (let i = 0; i < zodiacList.length; i++) {
      if (result === zodiacList[i].name) {
        const contentBlock = document.querySelector('.content-block');
        contentBlock.innerHTML =
          `<div class="info-box">
          <h1 class="title">${zodiacList[i].name}</h1>
          <img src="./img/zodiac-list/${zodiacList[i].image}.png" alt="">
          <p>${userName.value} Ваш знак зодіаку - ${zodiacList[i].name}</p>
          <p>Елемент: ${zodiacList[i].element}</p>
          <p>Символ: ${zodiacList[i].symbol}</p>
          <p>Планета: ${zodiacList[i].planet}</p>
          <p>Номер: ${zodiacList[i].number}</p>
          <p>Камінь: ${zodiacList[i].stone}</p>
          <p>${zodiacList[i].description}</p>
          <p>Чоловік ${zodiacList[i].name}: ${zodiacList[i].men}</p>
          <p>Жінка ${zodiacList[i].name}: ${zodiacList[i].woman}</p>
          <p>Дитина ${zodiacList[i].name}: ${zodiacList[i].child}</p>
          <p>Сумісність з іншими знаками: ${zodiacList[i].partner}</p>
          <p>Знаменитості, які народилися під знаком ${zodiacList[i].name}: ${zodiacList[i].partner}</p>
        </div>`;
      }
    }
  }
}

