export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '新页面',
    icon: 'smile',
    path: '/new',
    routes: [
      {
        name: '空白页面',
        icon: 'smile',
        path: '/new/page1',
        component: './New',
      },
      {
        name: '搜索列表',
        icon: 'smile',
        path: '/new/listsearch',
        component: './New/ListSearch',
      },
    ],
  },
  {
    component: './404',
  },
];
