<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const words = {
  outskirts: {
    type: 'n',
    cn: '郊区'
  },
  tradition: {
    type: 'n',
    cn: '传统'
  },
  squadron: {
    type: 'n',
    cn: '中队'
  },
  steel: {
    type: 'n',
    cn: '钢铁'
  },
  experiment: {
    type: 'n',
    cn: '实验'
  },
  firm: {
    type: 'n',
    cn: '公司'
  },
  couple: {
    type: 'n',
    cn: '夫妇,对'
  },
  decided: {
    type: 'v',
    cn: '决定'
  },
  probably: {
    type: 'adv',
    cn: '可能'
  },
  already: {
    type: 'adv',
    cn: '已经'
  },
  piloted: {
    type: 'v',
    cn: '驾驶,飞行'
  },
  expedition: {
    type: 'n',
    cn: '探险,远征'
  },
  truck: {
    type: 'n',
    cn: '卡车'
  },
  odd: {
    type: 'adv',
    cn: '奇数的'
  },
  premises: {
    type: 'n',
    cn: '房屋,场所'
  },
  church: {
    type: 'n',
    cn: '教堂'
  },
  specially: {
    type: 'adv',
    cn: '专门地,特别的'
  },
  designed: {
    type: 'v',
    cn: '设计'
  },
  advertising: {
    type: 'n',
    cn: '广告,宣传'
  },
  staff: {
    type: 'n',
    cn: '员工'
  },
  factory: {
    type: 'n',
    cn: '工厂'
  },
  turnover: {
    type: 'n',
    cn: '营业额'
  },
  imitate: {
    type: 'v',
    cn: '模仿'
  },
  relaxation: {
    type: 'n',
    cn: '休息'
  },
  aircraft: {
    type: 'n',
    cn: '飞机'
  },
  hobby: {
    type: 'n',
    cn: '爱好'
  },
  measured: {
    type: 'v',
    cn: '测量'
  },
  employ: {
    type: 'v',
    cn: '雇佣'
  },
  persuade: {
    type: 'v',
    cn: '说服'
  },
  cigarette: {
    type: 'n',
    cn: '香烟'
  },
  reluctant: {
    type: 'adj',
    cn: '勉强的'
  },
  section: {
    type: 'n',
    cn: '部门'
  },
  unexpected: {
    type: 'adj',
    cn: '意外的'
  },
  exciting: {
    type: 'adj',
    cn: '令人兴奋的'
  },
  rather: {
    type: 'adv',
    cn: '宁可'
  },
  culture: {
    type: 'n',
    cn: '文化,文明'
  },
  birth:
      {
        type: 'v',
        cn: '出生'
      },
  exist:
      {
        type: 'v',
        cn: '存在'
      },
  mythology:
      {
        type: 'n',
        cn: '神话'
      },
  goddess:
      {
        type: 'n',
        cn: '女神'
      },
  term:
      {
        type: 'n',
        cn: '术语,短语'
      },
  relate:
      {
        type: 'v',
        cn: '有关联'
      },
  universe:
      {
        type: 'n',
        cn: '宇宙'
      },
  lode:
      {
        type: 'n',
        cn: '矿脉'
      },
  mining: {
    type: 'v',
    cn: '采矿'
  },
  silver: {
    type: 'n',
    cn: '银'
  },
  supply: {
    type: 'v',
    cn: '供应'
  },
  graduate:
      {
        type: 'v',
        cn: '毕业'
      },
  struck:
      {
        type: 'v',
        cn: '打击'
      },
  strike: {
    type: 'n',
    cn: '罢工'
  },
  naturally:
      {
        type: 'adv',
        cn: '自然地,当然'
      },
  parties: {
    type: 'n',
    cn: '党,党派,当事人'
  },
  'event to':
      {
        type: 'v',
        cn: '甚至'
      },
  wisdom:
      {
        type: 'n',
        cn: '智慧'
      },
  'such as':
      {
        type: 'adv',
        cn: '例如'
      },
  necessity:
      {
        type: 'n',
        cn: '必要性,必须品'
      },
  invention:
      {
        type: 'n',
        cn: '发明'
      },
  invest:
      {
        type: 'v',
        cn: '投资'
      },
  invite:
      {
        type: 'v',
        cn: '邀请'
      },
  expression:
      {
        type: 'n',
        cn: '表达'
      },
  apron:
      {
        type: 'n',
        cn: '围裙'
      },
  controlled:
      {
        type: 'v',
        cn: '控制'
      },
  insulting:
      {
        type: 'v',
        cn: '侮辱'
      },
  marry:
      {
        type: 'v',
        cn: '结婚'
      },
  mistake:
      {
        type: 'n',
        cn: '错误'
      },
  still:
      {
        type: 'adv',
        cn: '仍然'
      },
  string:
      {
        type: 'n',
        cn: '绳子'
      },
  poem:
      {
        type: 'n',
        cn: '诗'
      },
  mysterious: {
    type: 'a',
    cn: '神秘的'
  },
  supposedly:
      {
        type: 'adv',
        cn: '据称'
      },
  nursery: {
    type: 'n',
    cn: '托儿所'
  },
  rhyme:
      {
        type: 'n',
        cn: '押韵'
      },
  refer:
      {
        type: 'v',
        cn: '参考'
      },
  treasure:
      {
        type: 'n',
        cn: '财宝'
      },
  lack:
      {
        type: 'v',
        cn: '缺乏'
      },
  relieve: {
    type: 'v',
    cn: '减轻'
  },
  anxiety: {
    type: 'n',
    cn: '焦虑'
  },
  cured: {
    type: 'v',
    cn: '治愈'
  },
  conclude:
      {
        type: 'v',
        cn: '推断出'
      },
  bothered:
      {
        type: 'v',
        cn: '担心,困扰'
      },
  suburb: {
    type: 'n',
    cn: '郊区'
  },
  piled:
      {
        type: 'v',
        cn: '堆起'
      },
  protect:
      {
        type: 'v',
        cn: '保护'
      },
  according:
      {
        type: 'prep',
        cn: '根据'
      },
  conversation: {
    type: 'n',
    cn: '谈话'
  },
  fight: {
    type: 'v',
    cn: '战斗'
  },
  enemies: {
    type: 'n',
    cn: '敌人'
  },
  establish: {
    type: 'v',
    cn: '建立'
  },
  active: {
    type: 'a',
    cn: '积极的'
  },
  coastal: {
    type: 'a',
    cn: '沿海的'
  },
  region:
      {
        type: 'n',
        cn: '地区'
      },
  climate:
      {
        type: 'n',
        cn: '气候'
      },
  plateaus:
      {
        type: 'n',
        cn: '高原'
      },
  consistently:
      {
        type: 'adv',
        cn: '一贯地,始终的'
      },
  negligible:
      {
        type: 'a',
        cn: '微不足道的'
      },
  quantities: {
    type: 'n',
    cn: '数量'
  },
  rarely: {
    type: 'adv',
    cn: '很少地'
  },
  traveler:
      {
        type: 'n',
        cn: '旅行者'
      },
  ravines: {
    type: 'n',
    cn: '峡谷'
  },
  unsuitable: {
    type: 'a',
    cn: '不合适的'
  },
  rocky:
      {
        type: 'a',
        cn: '多岩石的'
      },
  sudden:
      {
        type: 'adv',
        cn: '突然地'
      },
  nuclear:
      {
        type: 'a',
        cn: '核的'
      },
  radiation: {
    type: 'n',
    cn: '辐射'
  },
  detect:
      {
        type: 'v',
        cn: '检测'
      },
  receiver:
      {
        type: 'n',
        cn: '接收器'
      },
  common:
      {
        type: 'a',
        cn: '普通的'
      },
  hit:
      {
        type: 'v',
        cn: '击中'
      },
  reproduce:
      {
        type: 'v',
        cn: '繁殖,再生'
      },
  deformed:
      {
        type: 'a',
        cn: '畸形的'
      },
  cancer:
      {
        type: 'n',
        cn: '癌症'
      },
  serious:
      {
        type: 'a',
        cn: '严重的'
      },
  similarly: {
    type: 'adv',
    cn: '同样地'
  },
  lowest: {
    type: 'a',
    cn: '最低的'
  },
  refuse: {
    type: 'v',
    cn: '拒绝'
  },
  indicate: {
    type: 'v',
    cn: '表明'
  },
  critical:
      {
        type: 'a',
        cn: '关键的,批判的,喜欢批评的'
      },
  considerate:
      {
        type: 'a',
        cn: '体谅的,考虑周到的'
      },
  argument:
      {
        type: 'n',
        cn: '争论'
      },
  mention:
      {
        type: 'v',
        cn: '提及'
      },
  fault:
      {
        type: 'n',
        cn: '错误'
      },
  argued: {
    type: 'v',
    cn: '争论'
  },
  understood:
      {
        type: 'v',
        cn: '理解'
      },
  favorable:
      {
        type: 'a',
        cn: '有利的'
      },
  ring:
      {
        type: 'n',
        cn: '戒指,环'
      },
  apart:
      {
        type: 'adv',
        cn: '分离地'
      },
  particular:
      {
        type: 'a',
        cn: '特别的,特定的'
      },
  daily:
      {
        type: 'a',
        cn: '每日的,日常的'
      },
  variety:
      {
        type: 'n',
        cn: '种类,品种'
      },
  accurate:
      {
        type: 'a',
        cn: '准确的,正确的'
      },
  condition:
      {
        type: 'n',
        cn: '情况,状况'
      },
  scientific:
      {
        type: 'a',
        cn: '科学的,有根据的'
      },
  forecast:
      {
        type: 'v',
        cn: '预测'
      },
  satellite:
      {
        type: 'n',
        cn: '卫星'
      },
  property:
      {
        type: 'n',
        cn: '财产,所有物'
      },
  reach:
      {
        type: 'v',
        cn: '到达'
      },
  destination:
      {
        type: 'n',
        cn: '目的地'
      },
  certain:
      {
        type: 'a',
        cn: '一定的,确信的'
      },
  direction: {
    type: 'n',
    cn: '方向'
  },
  advance:
      {
        type: 'v',
        cn: '前进,进步'
      },
  'in advance': {
    type: 'ph',
    cn: '预先'
  },
  observe:
      {
        type: 'v',
        cn: '观察'
      },
  possible:
      {
        type: 'a',
        cn: '可能的,有希望的'
      },
  advantage:
      {
        type: 'n',
        cn: '优点,长处'
      },
  mineral: {
    type: 'n',
    cn: '矿物'
  },
  roast:
      {
        type: 'v',
        cn: '烤,炙烤'
      },
  manufacturing:
      {
        type: 'n',
        cn: '制造,加工'
      },
  slave:
      {
        type: 'n',
        cn: '奴隶'
      },
  labor:
      {
        type: 'n',
        cn: '劳动,劳工'
      },
  pioneer:
      {
        type: 'n',
        cn: '拓荒者'
      },
  population:
      {
        type: 'n',
        cn: '人口'
      },
  absolutely:
      {
        type: 'adv',
        cn: '完全地'
      },
  ludicrous:
      {
        type: 'a',
        cn: '荒唐的,可笑的'
      },
  obviously:
      {
        type: 'adv',
        cn: '显然地'
      },
  bacon: {
    type: 'n',
    cn: '咸肉'
  },
  chase:
      {
        type: 'v',
        cn: '追逐,追求'
      },
  course:
      {
        type: 'n',
        cn: '菜,课程,课程表'
      },
  generally:
      {
        type: 'adv',
        cn: '通常地'
      },
  lay:
      {
        type: 'v',
        cn: '放置,搁置'
      },
  prepare: {
    type: 'v',
    cn: '准备,预备'
  },
  definitely: {
    type: 'adv',
    cn: '当然地'
  },
  laundry:
      {
        type: 'n',
        cn: '洗衣店'
      }
}
export default {
  name: 'aboutView',
  data() {
    return {}
  }
}

</script>
