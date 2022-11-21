export interface IDictionary {
  name: string;
  desc?: string;
  words: number;
  level: 'easy' | 'medium' | 'hard',
  url: string
}

export const levelsMap = {
  easy: 'легко',
  medium: 'средне',
  hard: 'тяжело'
}

export const DICTIONARIES : IDictionary[] = [
  {
    name: 'Лёгкие русские слова Orange',
    desc: 'Лёгкие (бытовые) русские слова orange Alias. Словарь идеально составлен для тех, кто играет в Алиас впервые',
    words: 2050,
    level: 'easy',
    url: '/dictionaries/rus-orange-easy.json'
  },
  {
    name: 'Оптимальные русские слова Orange',
    desc: 'Словарь Orange с часто используемыми словами',
    words: 3106,
    level: 'medium',
    url: '/dictionaries/rus-orange-optimus.json'
  },
  {
    name: 'Сложные русские слова Orange',
    desc: 'Orange для опытных игроков',
    words: 2410,
    level: 'hard',
    url: '/dictionaries/rus-orange-brainstorm.json'
  },
  {
    name: 'Все слова русского языка с буквой ё',
    desc: 'Все-все слова с Ё. Объяснять будет непросто',
    words: 2194,
    level: 'hard',
    url: '/dictionaries/rus-all-yo.json'
  },
  {
    name: 'Словарь знаменитостей',
    desc: 'Объясни мне Брюса Уиллиса и Наташу Королёву',
    words: 335,
    level: 'medium',
    url: '/dictionaries/rus-thehat-celebrities.json'
  },
  {
    name: 'Слова в уменьшительной форме',
    desc: 'Словечки в уменьшительно-ласкательной формочке',
    words: 1730,
    level: 'easy',
    url: '/dictionaries/rus-diminutive.json'
  },
  {
    name: 'Средние слова для тренировки',
    desc: 'Средние и чуть сложнее, для игроков с опытом',
    words: 4677,
    level: 'medium',
    url: '/dictionaries/rus-custom-clearmeanings.json'
  },
  {
    name: 'Лёгкие английские слова',
    desc: 'Слова идеально подобраны для тех, кто только изучает английский язык',
    words: 2108,
    level: 'easy',
    url: '/dictionaries/eng-orange-easy.json'
  },
  {
    name: 'Оптимальные английские слова',
    desc: 'Средние английские слова для бывалых англичан',
    words: 3981,
    level: 'medium',
    url: '/dictionaries/eng-orange-optimus.json'
  },
  {
    name: 'Сложные английские слова',
    desc: 'London is the capital on Great Britain',
    words: 4695,
    level: 'hard',
    url: '/dictionaries/eng-orange-brainstorm.json'
  },
  {
    name: 'Easy, Medium, Hard',
    desc: 'Разные уровни вместе. Кому повезёт? Более 56 тысяч слов!',
    words: 56403,
    level: 'medium',
    url: '/dictionaries/rus-nouns-56k.json'
  },
  {
    name: 'Средне-сложные русские слова',
    desc: ' Более 15 тысяч слов!',
    words: 15524,
    level: 'hard',
    url: '/dictionaries/rus-custom-15kfun.json'
  },
  {
    name: 'Словарь русских матов',
    desc: 'Объясните вежливо! Экспериментально 18+',
    words: 590,
    level: 'hard',
    url: '/dictionaries/rus-rude-offensive.json'
  }
];
