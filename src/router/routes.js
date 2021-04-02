
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },

  //Admin Routes
  {
    path: '/admin',
    redirect: '/admin/home',
    component: () => import('layouts/AdminLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      { path: 'home', component: () => import('pages/AdminDashboard.vue') },
      { path: 'users', component: () => import('pages/UserManagement.vue') }
    ]
  },

  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/products', component: () => import('pages/Index.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
