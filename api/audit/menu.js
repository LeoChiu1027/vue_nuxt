const Menu = [
  {
    title: '會員專區',
    group: 'apps',
    icon: 'mdi-magnify',
    name: 'search-txn',
    href: '/audit/member/member',
  },
  {
    title: '測試',
    group: 'apps',
    icon: 'mdi-cash-multiple',
    name: 'search-blockTrading',
    href: '/audit/blocktradesearch'
  },
  {
    title: '登出',
    group: 'extra',
    icon: 'list',
    href: '/audit/login'
  }
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
