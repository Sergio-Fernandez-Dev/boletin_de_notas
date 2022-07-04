import router from '../router';

export function getCurrentPath() {
  return router.currentRoute.value.path;
}
