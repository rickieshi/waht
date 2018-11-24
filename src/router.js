import VueRouter from 'vue-router';
import { Index, Auth } from './components';

const routes = [{
    path: '/', component: Index, name: 'index'
}, {
    path: '/dashboard', component: Auth, name: 'auth'
}];

const router = new VueRouter({ routes });

export default router;
