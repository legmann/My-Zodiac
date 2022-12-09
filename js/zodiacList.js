// https://tsn.ua/lady/astrologiya/scho-mi-znayemo-pro-lyudey-yaki-narodilisya-pid-znakom-vodoliya-1707556.html
// https://www.unian.ua/lite/astrology/10748736-strilec-povna-harakteristika-znaka-zodiaku.html

const zodiacList = [

  {
    name: 'Водолій',
    date: '21 січня - 19 лютого',
    image: 'image url',
    element: 'Повітря',
    // symbol: 'Людина, яка тримає в руках дві посудини: в одній – жива вода, в іншій – мертва',
    planet: 'Уран, Сатурн',
    number: 'Одинадцятий знак зодіаку',
    // stone: 'Нефрит, аметист, обсидіан, яшма, змійовик, авантюрин і перли',

    description: `Водолії — не найпростіший, через свою неоднозначність і суперечливість, знак зодіаку. Його представники вважають своє життя прісним, тому постійно перебувають в пошуку нових вражень і відчуттів. Не дивно, що, відшукавши їх, вони часто потрапляють в безглузді, а часом і вельми неприємні ситуації. Проте, що б не створили представники знака, вони завжди знайдуть собі виправдання, навіть якщо підсвідомо розумітимуть, що вчинили погано.
    
    Водолії непередбачувані, перебувати поруч із ними — все одно що жити на вулкані, але без них наш світ був би нудним і одноманітним. Вони претендують на оригінальність у всьому — від манери поведінки до одягу, і, треба визнати, їм найчастіше вдається відрізнятися від тих, хто їх оточує: ніхто, наприклад, не може так з'єднати в одне ціле непоєднувані предмети гардеробу, як це роблять вони.

    За першого знайомства Водолії, як правило, справляють помилкове враження: якщо вони здаються тихими, потрібно приготуватися до їхнього бешкету, а якщо скромними, то можна не сумніватися: це великий любитель випинати власне "я".
    
    Добре мати Водоліїв серед своїх друзів — вони завжди прийдуть на допомогу, як в моральному, так і в матеріальному плані. У представників знака дивно гармонійно уживається тяга до духовного і фізичного світу. З одного боку, вони захоплюються філософськими навчаннями і обожнюють подорожі до місць сили, з іншого — впевнені, що рай в курені неможливий — вони завжди віддадуть перевагу комфортній домашній атмосфері, дорогому одягу і смачній їжі.`,

    men: `Чоловіки-Водолії — найволелюбніші у всьому зодіаку, годі й сподіватися прив'язати їх до себе — вони зірвуться з будь-якого "ланцюга". Зате на роботі переоцінити представників знака важко, а то й неможливо. Будь-які керівники люблять мати підпорядкованих представників саме цього знака, оскільки їм можна довірити будь-який напрям у роботі — вони не підведуть. Головне, не обмежувати їхню фантазію і дати повний карт-бланш на будь-які дії. Вибираючи професію, Водолії воліють творчість, тому серед них багато акторів, театральних і кінорежисерів, художників і навіть фокусників.
    
    Єдиний напрям, в якому чоловіки-Водолії, як правило, пробуксовують, — це особисте життя. Навіть будучи щасливими в шлюбі, вони не обмежують себе в інтригах і зрадах, чим неабияк докучають своїм другим половинкам. Якщо запитати Водоліїв про причини такої поведінки, вони, не соромлячись, дадуть відповідь, що шукають свій ідеал, але, на жаль, не знаходять його. Швидше за все, жінку, яку вони вважали б гідною себе, природа поки не створила, тому представники знака і перебувають у вічному пошуку.`,

    woman: `Жінка-Водолій — максималістка, яка живе за принципом "все або нічого". Вона може присвятити життя боротьбі за ідеї, які здаються представниці знака важливими, навіть якщо особисто їй вони не близькі — цивільні права, свободу і незалежність. Жінки-Водолії першими серед усього зодіаку відгукуються на нові віяння, чого б вони не стосувалися, — моди, знань, книжок, мистецтва — насамперед живопису.

    Жінки цього знака вміє справити враження на оточення, недивно, що чоловіки закохуються в них з першого погляду і втрачають голову всерйоз і надовго. А от самі вони не поспішають віддавати своє серце не тільки першому, але й другому і навіть десятому зустрічному — всі претенденти на руку і серце жінок-Водоліїв для них недостатньо гарні. Відповісти на почуття чоловіка вони можуть тільки в тому разі, якщо у нього вистачить почуття гумору, щоб весь час її смішити, і інших талантів, які дадуть можливість постійно її розважати. У будинку у жінки-Водолія, можливо, не завжди ідеальний лад, зате там тепло — як в прямому, так і в переносному сенсі — і затишно.`,

    partner: `Найкращою парою для водолія є водний знак — Рак, і повітряні знаки — Близнята і Терези: вони однаково високо цінують тонкість і готовність йти на компроміси, так само двоїсті і непостійні, тому розуміють одне одного з пів слова. З Овнами і представниками власного знака у них складаються складні заємини, в яких бурхливі сварки змінюють не менш бурхливі примирення, що, власне, і тримає тих і тих поруч одне з одним. А ось зі Скорпіонами і Левами Водоліям краще не зв'язуватися — нічого, крім взаємного роздратування, такий союз не принесе.`,

    famous: `Під знаком Водолія на світ з'явилися політики Авраам Лінкольн і Анджела Девіс, композитор Вольфганг Амадей Моцарт, письменники Чарльз Діккенс, Вірджинія Вулф і Антон Чехов, балерина Анна Павлова, кутюр'є Крістіан Діор і Пако Рабан, співак і автор пісень Джастін Тімберлейк, співачка Тіна Кароль, супермодель Дженіс Дікінсон, актори Кларк Гейбл, Дженніфер Еністон, Джон Траволта і Ештон Катчер, світська левиця Періс Гілтон і дочка Елвіса Преслі - Ліза Марія.`

  }

]

console.log(zodiacList[0].name);
console.log(zodiacList[0].date);

