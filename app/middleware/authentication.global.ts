const PAGES_GUEST = [
  'login',
  'reset-password',
];
const PAGES_AUTHENTICATED_ANY = [
  'app',
  'student',
  'profile',
];
const PAGES_AUTHENTICATED_TEACHER = [
  'my-diary',
  'my-classes',
  'create-student',
  'update-student',
  'my-standards',
  'create-standard',
  'update-standard',
];


export default defineNuxtRouteMiddleware(async to => {
  if (PAGES_AUTHENTICATED_TEACHER.includes(to.name as string) && !useUserStore().isTeacher) {
    return { name: 'app' };
  }
  if (PAGES_AUTHENTICATED_ANY.includes(to.name as string) && !useUserStore().isLoggedIn) {
    return { name: 'login' };
  }
  if (PAGES_GUEST.includes(to.name as string) && useUserStore().isLoggedIn) {
    return { name: 'app' };
  }
});
