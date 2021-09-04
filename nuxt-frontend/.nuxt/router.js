import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _108f3984 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _6ff4c6d9 = () => interopDefault(import('../pages/dashboard/guests.vue' /* webpackChunkName: "pages/dashboard/guests" */))
const _021d28aa = () => interopDefault(import('../pages/dashboard/rooms.vue' /* webpackChunkName: "pages/dashboard/rooms" */))
const _c4e06d02 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _108f3984,
    name: "dashboard"
  }, {
    path: "/dashboard/guests",
    component: _6ff4c6d9,
    name: "dashboard-guests"
  }, {
    path: "/dashboard/rooms",
    component: _021d28aa,
    name: "dashboard-rooms"
  }, {
    path: "/",
    component: _c4e06d02,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
