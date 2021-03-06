//! Проверка данных
//YYY-MM-DD 2020-07-27
//YYY.MM.DD YYY_MM_DD YYYMMDD
/-?\d{,10}[\.-_]?[01]\d[\.-_]?[0123]\d/
//DD-MM-YYY, dd.m.yy


//! Форматирование данных

const city = 'Dnipropetrovsk';

//? Регулярные выражения
//Объектно
const regA = new RegExp('a');
//Литерально
const regA2 = /a/;
const regO = /o/;
const regRope = /rope/;
//one of list
const regVowels = /[aouiey]/;
const regMix = /[tr][aouiey]/;
//Отрицание єлементов списка
const regNoRM = /[^rm]/;
//symbol classes
//number
const regNums = /[0123456789]/;
const regNums2 = /[0-9]/;
const regNums3 = /\d/;// цифра  /[0-9]/
const regNoNums = /\D/;// цифра /[^0-9]/
//alphabet-number
const regAlphNum = /[a-zA-Z0-9_]/;
const regAlphNum2 = /\w/;
const regNoAlphNum = /\W/; // не /[^a-zA-Z0-9_]/
//пробельные символы
const regNewLine = /\n/; //перенос строки
const regTab = /\t/; //табуляция
// \v - вертикальная табуляция
// \f - подача страницы
// \r - возврат каретки
// /\xd3/
// /\u2620/ - ☠
const regSpace = /\s/;//перенос строки, табуляция, пробел, возврат каретки и еще много чего странного.
const regNoSpace = /\S/;//no space
//all symbols (кроме \n, \r, \u2028, \u2029)
const regAll = /./; //все символы
const regDot = /\./; // точка
//граница слова
const regBorder = /\b/;
const regRope2 = /\brope\b/;
const regNoBorder = /\B/; // не граница
const regRope3 = /\Brope\B/;
//Якоря
const regFromD = /^D/; //якорь начала
const regEndK = /k$/; //якорь конца
//! Квантификаторы
const nums = '1248498051081008049846516816841';
const regIs2Zeros = /00/;
const regIs3Zeros = /000/;
const regIs2_3Zeros = /0{2,3}/;//Диапазон
const regFrom2 = /0{2,}/;//от какого-то до бесконечности
const regTo2 = /0{,2}/;// '', '0', '00'
const reg4Zeros = /0{4}/; //четкое количество символов
// 0* - Андрей Тимошенко {0,}
// 0+ - Светлана {1,}
// 0? - Андрей  {0,1}
console.log('is 2 zeros: ', regIs2Zeros.test(nums));

//test - method by regExp - return true/false
console.log('is A: ', regA.test(city));
console.log('is O: ', regO.test(city));
console.log('is rope: ', regRope.test(city));
console.log('is vowels: ', regVowels.test(city));
console.log('is mixed(ta,to,tu,ti,te,ty,ra...): ', regMix.test(city));

//флаги
// g -> глобальный поиск. Поиск до конца строки(больше 2 совпадения)

const regTo22 = /\d+/g;

// i -> и верхний и нижний регистр case insensitive
const regG = /г/ig;

//m -> многострочность

const wikiNyt = `История

The Times Square Building (англ.)русск. — здание штаб-квартиры газеты c 1913 по 2007 годы
«Нью-Йорк таймс» была основана как New-York Daily Times 18 сентября 1851 года журналистом и политиком Генри Джарвисом Рэймондом (1820—1869), позже членом Партии вигов и вторым председателем Республиканского национального комитета, и бывшим банкиром Джорджем Джонсом. Вскоре они продали газету за копейки (сегодняшний эквивалент равняется 28 центам).

Газета укоротила своё название до The New-York Times в 1857 году. В 1890-х годах дефис в названии города был убран[6]. 21 апреля 1861 года, «Нью-Йорк таймс» отошла от своего первоначального расписания выпуска публикаций «понедельник — суббота» и присоединилась к другим крупным ежедневным газетам, добавив ещё тираж в воскресенье и предложив ежедневное освещение темы гражданской войны.

Главный офис «Нью-Йорк таймс» был атакован во время призывного бунта в Нью-Йорке, спровоцированного началом призыва на обязательную военную службу в армии северян в разгаре Гражданской войны 13 июля 1863 года.[7]

Влияние газеты возросло в период с 1870—1871 года, когда она опубликовала серию статей о разоблачении Уильяма Твида, главы городской Демократической партии — известной в городе как Tammany Hall — что привело к концу господства в мэрии Нью Йорка Tweed Rings. В 1880-х «Нью-Йорк таймс» постепенно отходит от редакционной поддержки кандидатов Республиканской партии, чтобы стать более политически независимой и аналитической газетой; в 1884 году демократ Гровер Кливленд (бывший мэр Буффало и губернатор штата Нью-Йорк) в своей первой президентской кампании поддерживает газету[8]. Хотя этот переход стоил The New York Times потери читателей, среди которых консерваторы, бизнес-ориентированные читатели, читатели высших слоёв, но в конечном итоге газета восстановила количество читателей в течение нескольких лет и медленно приобрела репутацию справедливой и беспристрастной газеты, особенно в 1890-х годах под руководством нового владельца, издателя, Адольфа Окса из города Чаттануга, штат Теннесси.


Нью-Йорк-Таймс-билдинг — новое здание штаб-квартиры газеты на Манхэттене (c 2007 года, архитектор Ренцо Пиано)
«Нью-Йорк таймс» была приобретена Адольфом Оксом, издателем Chattanooga Times, в 1896 году. В следующем году он придумал слоган газеты: «У нас все новости, которые можно напечатать» (англ. All the News That’s Fit to Print), которая располагается в левом верхнем углу на первой странице газеты на протяжении следующих 120 лет. Это было ударом для газет-конкурентов, таких как газета Джозефа Пулицера New York World и Уильяма Рендольфа New York Journal, которые были известны в то время, как мрачные, сенсационные и с наличием ошибочных мнений и фактов, известных в конце столетия как «жёлтая пресса» (жёлтая журналистика). Под руководством Окса, продолжая и расширяя традиции Генри Раймонда (которые были ещё со времён Джеймса Гордона Беннета в New York Herald, который предшествовал появлению в Нью Йорке Пулицера и Хёрста) «Нью-Йорк таймс» достигла международного влияния, укрепила репутацию и увеличила тиражи. В 1904 году «Нью-Йорк таймс» получила с борта пресс-корабля «Хаймун» первый репортаж по радиотелеграфу, отчёт об уничтожении Императорского Русского Балтийского флота в битве при Порт Артуре в проливе Цусима — (одном из наиболее важных, изменивших историю, военно-морских сражений). В 1910 году начали доставлять «Нью-Йорк таймс» по воздуху в Филадельфию. Первая трансатлантическая доставка по воздуху — дирижаблем в Лондон, произошла в 1919 году. В 1920 номера спецвыпуска 4 A.M. Airplane Edition были отправлены самолётом в Чикаго для того, чтобы делегаты от Республиканской партии получили их вечером того же дня[9].

В 1940-х гг. газета «Нью-Йорк таймс» продолжила расширять свой охват и масштаб. В 1942 году регулярно начали появляться кроссворды, а в 1946 году появился и раздел моды. Международная версия «Нью-Йорк таймс» начала издаваться в 1946 году. В 1967 году Международное издание перестало выпускаться по причине того, что «Нью-Йорк таймс» присоединилась к владельцам New York Herald Tribune и The Washington Post, и стала совладельцем International Herald Tribune в Париже. В 2007 году «Вашингтон пост» продала свою долю акций и единственным собственником газеты (которая с 2007 г. называется «Интернэшнл Нью-Йорк Таймс») стала компания «Нью-Йорк таймс». В 1946 году газета купила АM-радиостанцию WQXR (1560 кГц, продана New York Public Radio в 2007 году), и станцию WQXR, которая под именем WQXR-FM вещала на частоте 96,3 МГц. Радиостанции под общим названием «The Radio Station of The New York Times» транслировали классическую музыку на обеих частотах до декабря 1992 года, когда биг-бэнд и стандартные музыкальные форматы станции WNEW-AM (сейчас WBBR/«Bloomberg Radio») перешли с частоты 1130 кГц на 1560 кГц. Радиостанция WQXR стала называться WQEW. К началу XXI века «Нью-Йорк таймс» сдала WQEW в аренду ABC Radio с его форматом Radio Disney[10] . Окончательно компания Дисней стала владельцем WQEW в 2007 году[11]. 14 июля 2009 года было объявлено, что WQXR-FM была продана WNYC (англ.)русск., которая 8 октября 2009 года перевела станцию на волну 105,9 FM и начала использовать её в качестве некоммерческой[12].

В 2009 году New York Times, третья по тиражу газета в США после USA Today и The Wall Street Journal[12]. Газета принадлежит The New York Times Company, в которой потомки Адольфа Окса (в особенности семья Зульцбергер) играют доминирующую роль. В 2009 году тираж газеты упал на 7,3 процента до 928 000 экземпляров; это первый раз с 1980 года, когда тираж опускается до отметки ниже одного миллиона. 26 декабря 2010 года было сообщено, что тираж газеты в будние дни составил 906 100 экземпляров и 1 356 800 экземпляров по воскресеньям[13]. В Нью-Йоркской агломерации газета стоит $ 2.50 с понедельника по субботу и $ 5 в воскресенье. Газета «Нью-Йорк таймс» имеет не только свою штаб-квартиру, но также 16 бюро новостей в Нью-Йоркской агломерации, 11 национальных информационных бюро и 26 зарубежных информационных бюро[13]. «Нью-Йорк таймс» сократила ширину страницы до 12 дюймов (300 мм) с 13,5 дюймов (340 мм), приняв 6 августа 2007 года ширину, которая стала стандартным форматом для всех газет США[14]. Из-за неуклонного снижения продаж печатного варианта и роста интернет вариантов средств массовой информации и социальных медиа, газета переживает сокращения персонала в течение нескольких последних лет[15].

В апреле 1992 года вышел первый номер «Нью-Йорк Таймс. Недельное обозрение» на русском языке — это было совместное предприятие газеты с «Московскими новостями». На момент закрытия еженедельника в январе 1994 года у неё была 31 тыс. подписчиков, но успешным этот бизнес не стал[16].

Здания штаб-квартиры

Нью-Йорк-таймс-билдинг (Парк-Роу, д. 41), где редакция располагалась в 1899—1903 гг.
Первое здание газеты было расположено по адресу Нассо-стрит, д. 113, в Нью-Йорке. В 1854 году газета переехала в д. 138 на той же улице, а в 1858 году — в Нью-Йорк-таймс-билдинг на Парк-Роу, д. 41, что сделало «Нью Йорк Таймс» первой газетой, которая была расположена в здании, построенном специально для этой цели[17]. В 1904 году газета переехала в Times Tower, расположенный на 1475 Broadway, в районе под названием Лонгэйкр-сквер (англ. Longacre Square), который позже был переименован в известный Таймс-сквер в честь газеты.

Здание также отличается электронной новостной лентой, известной и именуемой в народе как «Молния» (The Zipper), на которой снаружи здания появляются различные заголовки. Этот метод всё ещё используется, но в настоящее время управляется информационным агентством Рейтер. После девяти лет пребывания офиса в башне газеты Таймс-сквер была построена дополнительная постройка на 229 West 43rd Street. После нескольких расширений, в 1960 году здание на 43-й Street стало главной штаб квартирой газеты, и Times Tower на Бродвее был продан в следующем году. Он служил главным зданием типографии газеты до 1997 года.

Десять лет спустя, «Нью-Йорк таймс» перевела свой отдел новостей и штаб-квартиру из Западной 43-й улицы в сверкающую новую башню на 620 Восьмой авеню между Западной 40-й и 41-й улицами, на Манхэттене — прямо напротив Восьмой авеню. Новая штаб-квартира для газеты, официально известная как «The New York Times Building», но неофициально называется многими жителями Нью-Йорка как новая «Times Tower», является небоскрёбом, который был построен по проекту Ренцо Пьяно[18][19].

Владелец
В 1896 году Артур Окс купил убыточную газету «Нью-Йорк таймс» и организовал New York Times Company. С тех пор была основана одна из знаменитых газетных династий Окс-Зульцбергер[8]. В 1960 году, после того как издатель газеты стал публичной компанией, семья продолжает контролировать газету, имея в собственности контрольный пакет акций класса Б. Владельцы акций класса А имеют ограниченное право голоса. Такая двойная система позволяет владельцам продолжать контролировать компанию после того, как она стала публичной. Семье Окс-Зульцбергеров принадлежит 88 % акций класса Б[20]. Любое изменение проводящиеся в структуре компании, газеты, должно проводится и быть ратифицированным 6 из 8 директоров, которые пользуются доверием семьи. Членами правления являются: Daniel H. Cohen, James M. Cohen, Lynn G. Dolnick, Susan W. Dryfoos, Michael Golden, Eric M. A. Lax, Arthur O. Sulzberger, Jr. and Cathy J. Sulzberger[21].

Тёрнер Катледж, главный редактор «Нью-Йорк таймс» с 1952 по 1968, хотел скрыть влияние владельцев. Артур Зульцбергер регулярно писал записки своему редактору, каждая из которых содержала предложения, инструкции, жалобы и заказы. Если бы Катледж получал эти заметки, он смог бы стереть личность издателя в прах, прежде чем передать их своим подчинённым. Катледж думал, что если он удалил имя издателя из записок, то это защитит журналистов от чувства давления со стороны владельца[22].

Кредиты и инвестиции
20 января 2009 «Нью-Йорк таймс» анонсировал, что Карлос Слим, мексиканский телекоммуникационный магнат и 2-й самый богатый человек в мире[23], дал 250$ миллионов займа газете «для того, чтобы помочь газете финансировать его бизнес»[24]. С того времени, Слим сделал дополнительные инвестиции в акции «Таймс»; ссылаясь на Рейтер, его позиция на 6 октября 2011 достигла отметки в 8,1 % владения акциями класса А[25].`;

console.log(wikiNyt.match(regTo22));
console.log(wikiNyt.match(regG));

///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/


//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/match
//match - поиск совпадений

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// replace - замена в подстроки в строке

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split
// split