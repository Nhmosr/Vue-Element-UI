const routers = [{
    path: '/',
    name: 'index',
    component: (resolve) => require(['../page/home.vue'], resolve)
}, {
    path: '/home',
    name: 'home',
    component: (resolve) => require(['../page/home.vue'], resolve)
},{
	path: '/infoList',
	name: 'infoList',
	component: (resolve) => require(['../page/info-list.vue'], resolve)
},{
	path: '/personInfo',
	name: 'personInfo',
	component: (resolve) => require(['../page/person-info.vue'], resolve)
},{
	path: '/updateInfo',
	name: 'updateInfo',
	component: (resolve) => require(['../page/update-info.vue'], resolve)
},{
	path: '/account',
	name: 'account',
	component: (resolve) => require(['../page/account-capital.vue'], resolve)
}];
export default routers;
