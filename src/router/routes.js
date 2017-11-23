/**
 * Created by Administrator on 2017/11/8.
 */
const Init = () => import('@/views/init')
const Main = () => import('@/views/main')

const routes = [
  {
    path: '/',
    name: 'init',
    component: Init
  },
  {
    path: '/index',
    name: 'main', // 随便取
    component: Main // 必须和上面定义的一样
  }
]

export default routes
