const randDate = function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export default {
  
  data:[{
    id:1,
    title: '말레이시아 발전소 매각',
    About: true,
    Suggest: true,
    Checked: false,
    Supplies: false,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'power_plant',
  },
  {
    id:2,
    title: '인니, LNG 프로젝트',
    About: true,
    Suggest: true,
    Checked: true,
    Supplies: false,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'construction',
  },
  {
    id:3,
    title: '필리픈, 300MW 플랜트',
    About: true,
    Suggest: true,
    Checked: false,
    Supplies: false,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'power_plant',
  },
  {
    id:4,
    title: '미얀마, Kyaukphyu power',
    About: true,
    Suggest: true,
    Checked: false,
    Supplies: false,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'power_plant',
  },
  {
    id:5,
    title: '홍콩, 담수화 플랜트',
    About: true,
    Suggest: true,
    Checked: true,
    Supplies: false,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'construction',
  },
  {
    id:6,
    title: '말레이시아 발전소 매각',
    About: true,
    Suggest: true,
    Checked: true,
    Supplies: true,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'power_plant',
  },
  {
    id:7,
    title: '말레이시아 풍력 발전',
    About: true,
    Suggest: false,
    Checked: true,
    Supplies: false,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'wind_farm',
  },
  {
    id:8,
    title: '캐나다 풍력 발전',
    About: true,
    Suggest: true,
    Checked: true,
    Supplies: false,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'wind_farm',
  },
  {
    id:9,
    title: '케냐 풍력 발전소 건설',
    About: true,
    Suggest: false,
    Checked: true,
    Supplies: false,
    date: randDate(new Date(2019, 0, 1), new Date()),
    icon: '/img/baseline-supervisor_account-24px.svg',
    category: 'wind_farm',
  },
]
}